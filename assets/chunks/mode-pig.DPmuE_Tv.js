import{g as E}from"./commonjsHelpers.BosuxZz1.js";function x(h,T){for(var o=0;o<T.length;o++){const a=T[o];if(typeof a!="string"&&!Array.isArray(a)){for(const d in a)if(d!=="default"&&!(d in h)){const c=Object.getOwnPropertyDescriptor(a,d);c&&Object.defineProperty(h,d,c.get?c:{enumerable:!0,get:()=>a[d]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(h,T){ace.define("ace/mode/pig_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,a,d){var c=o("../lib/oop"),f=o("./text_highlight_rules").TextHighlightRules,p=function(){this.$rules={start:[{token:"comment.block.pig",regex:/\/\*/,push:[{token:"comment.block.pig",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.pig"}]},{token:"comment.line.double-dash.asciidoc",regex:/--.*$/},{token:"keyword.control.pig",regex:/\b(?:ASSERT|LOAD|STORE|DUMP|FILTER|DISTINCT|FOREACH|GENERATE|STREAM|JOIN|COGROUP|GROUP|CROSS|ORDER|LIMIT|UNION|SPLIT|DESCRIBE|EXPLAIN|ILLUSTRATE|AS|BY|INTO|USING|LIMIT|PARALLEL|OUTER|INNER|DEFAULT|LEFT|SAMPLE|RANK|CUBE|ALL|KILL|QUIT|MAPREDUCE|ASC|DESC|THROUGH|SHIP|CACHE|DECLARE|CASE|WHEN|THEN|END|IN|PARTITION|FULL|IMPORT|IF|ONSCHEMA|INPUT|OUTPUT)\b/,caseInsensitive:!0},{token:"storage.datatypes.pig",regex:/\b(?:int|long|float|double|chararray|bytearray|boolean|datetime|biginteger|bigdecimal|tuple|bag|map)\b/,caseInsensitive:!0},{token:"support.function.storage.pig",regex:/\b(?:PigStorage|BinStorage|BinaryStorage|PigDump|HBaseStorage|JsonLoader|JsonStorage|AvroStorage|TextLoader|PigStreaming|TrevniStorage|AccumuloStorage)\b/},{token:"support.function.udf.pig",regex:/\b(?:DIFF|TOBAG|TOMAP|TOP|TOTUPLE|RANDOM|FLATTEN|flatten|CUBE|ROLLUP|IsEmpty|ARITY|PluckTuple|SUBTRACT|BagToString)\b/},{token:"support.function.udf.math.pig",regex:/\b(?:ABS|ACOS|ASIN|ATAN|CBRT|CEIL|COS|COSH|EXP|FLOOR|LOG|LOG10|ROUND|ROUND_TO|SIN|SINH|SQRT|TAN|TANH|AVG|COUNT|COUNT_STAR|MAX|MIN|SUM|COR|COV)\b/},{token:"support.function.udf.string.pig",regex:/\b(?:CONCAT|INDEXOF|LAST_INDEX_OF|LCFIRST|LOWER|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|SIZE|STRSPLIT|SUBSTRING|TOKENIZE|TRIM|UCFIRST|UPPER|LTRIM|RTRIM|ENDSWITH|STARTSWITH|TRIM)\b/},{token:"support.function.udf.datetime.pig",regex:/\b(?:AddDuration|CurrentTime|DaysBetween|GetDay|GetHour|GetMilliSecond|GetMinute|GetMonth|GetSecond|GetWeek|GetWeekYear|GetYear|HoursBetween|MilliSecondsBetween|MinutesBetween|MonthsBetween|SecondsBetween|SubtractDuration|ToDate|WeeksBetween|YearsBetween|ToMilliSeconds|ToString|ToUnixTime)\b/},{token:"support.function.command.pig",regex:/\b(?:cat|cd|copyFromLocal|copyToLocal|cp|ls|mkdir|mv|pwd|rm)\b/},{token:"variable.pig",regex:/\$[a_zA-Z0-9_]+/},{token:"constant.language.pig",regex:/\b(?:NULL|true|false|stdin|stdout|stderr)\b/,caseInsensitive:!0},{token:"constant.numeric.pig",regex:/\b\d+(?:\.\d+)?\b/},{token:"keyword.operator.comparison.pig",regex:/!=|==|<|>|<=|>=|\b(?:MATCHES|IS|OR|AND|NOT)\b/,caseInsensitive:!0},{token:"keyword.operator.arithmetic.pig",regex:/\+|\-|\*|\/|\%|\?|:|::|\.\.|#/},{token:"string.quoted.double.pig",regex:/"/,push:[{token:"string.quoted.double.pig",regex:/"/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.double.pig"}]},{token:"string.quoted.single.pig",regex:/'/,push:[{token:"string.quoted.single.pig",regex:/'/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.single.pig"}]},{todo:{token:["text","keyword.parameter.pig","text","storage.type.parameter.pig"],regex:/^(\s*)(set)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/$/,next:"pop"},{include:"$self"}]}},{token:["text","keyword.alias.pig","text","storage.type.alias.pig"],regex:/(\s*)(DEFINE|DECLARE|REGISTER)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/;?$/,next:"pop"}]}]},this.normalizeRules()};p.metaData={fileTypes:["pig"],name:"Pig",scopeName:"source.pig"},c.inherits(p,f),a.PigHighlightRules=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,a,d){var c=o("../../lib/oop"),f=o("../../range").Range,p=o("./fold_mode").FoldMode,m=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(m,p),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var g=e.getLine(i);if(this.singleLineBlockCommentRe.test(g)&&!this.startRegionRe.test(g)&&!this.tripleStarBlockCommentRe.test(g))return"";var r=this._getFoldWidgetBase(e,t,i);return!r&&this.startRegionRe.test(g)?"start":r},this.getFoldWidgetRange=function(e,t,i,g){var r=e.getLine(i);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,i);var n=r.match(this.foldingStartMarker);if(n){var l=n.index;if(n[1])return this.openingBracketBlock(e,n[1],i,l);var s=e.getCommentFoldRange(i,l+n[0].length,1);return s&&!s.isMultiLine()&&(g?s=this.getSectionRange(e,i):t!="all"&&(s=null)),s}if(t!=="markbegin"){var n=r.match(this.foldingStopMarker);if(n){var l=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],i,l):e.getCommentFoldRange(i,l,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),g=i.search(/\S/),r=t,l=i.length;t=t+1;for(var s=t,n=e.getLength();++t<n;){i=e.getLine(t);var R=i.search(/\S/);if(R!==-1){if(g>R)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=r)break;if(u.isMultiLine())t=u.end.row;else if(g==R)break}s=t}}return new f(r,l,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,i){for(var g=t.search(/\s*$/),r=e.getLength(),l=i,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++i<r;){t=e.getLine(i);var R=s.exec(t);if(R&&(R[1]?n--:n++,!n))break}var u=i;if(u>l)return new f(l,g,u,t.length)}}).call(m.prototype)}),ace.define("ace/mode/pig",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pig_highlight_rules","ace/mode/folding/cstyle"],function(o,a,d){var c=o("../lib/oop"),f=o("./text").Mode,p=o("./pig_highlight_rules").PigHighlightRules,m=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=p,this.foldingRules=new m};c.inherits(e,f),(function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/pig"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/pig"],function(o){h&&(h.exports=o)})}()})(S);var k=S.exports;const I=E(k),b=x({__proto__:null,default:I},[k]);export{b as m};
