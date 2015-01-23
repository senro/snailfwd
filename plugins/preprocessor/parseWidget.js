//module.exports = function(content, file){
//  if(file.isSwig){
//    var map = fis.compile.lang;
//    var reg = /(\{%\s*)(?:(require\s+)('[^']+'|"[^"]+")([\s\S]*?%\})|(script\s*%\})([\s\S]+?)(\{%\s*endscript\s*%}))/g;
//    //(  1   )(?:(    2     )(        3      )(     4     )|(     5      )(    6   )(      7        ))/
//    content = content.replace(reg, function(m, $1, $2, $3, $4, $5, $6, $7){
//      if($2){
//        m = $1 + $2 + map.require.ld + $3 + map.require.rd + $4;
//      } else if($5){
//        m = $1 + $5 + fis.compile.extJs($6) + $7;
//      }
//      return m;
//    });
//  }
//  return content;
//};


module.exports = function(content, file, conf){
//    fis.util.merge(_.templateSettings, conf);
//    return _.template(content).source;
    var widgetLabels=content.match(/\<\!\-\-load_widget\((\"|\')([a-z]*)(\"|\')\)\-\-\>/g),widgets=[];
    for(var i=0;i<widgetLabels.length;i++){
        var widgetLabel=widgetLabels[i];//<!--load_widget("menu")-->
        fis.log.debug('find '+parseWidgetName(widgetLabel)+'\n');
        widgets.push(parseWidgetName(widgetLabel));
    }
    function parseWidgetName(str){
        if(/\"/g.test(str)){
            return str.split('\"')[1];
        }else if(/\'/g.test(str)){
            return str.split('\'')[1];
        }
    }

    return widgets;
};