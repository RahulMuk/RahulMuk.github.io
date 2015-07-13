
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_classroomDot}","mouseover",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_classroomDot}","mouseenter",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_classroomDot}","mouseleave",function(sym,e){sym.playReverse(500);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseenter",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_washingtonDot}","mouseover",function(sym,e){sym.play(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_washingtonDot}","mouseleave",function(sym,e){sym.playReverse(1500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop(500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",705,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1610,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_parkDot}","mouseenter",function(sym,e){sym.play(2000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_parkDot}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_washingtonDot}","mouseenter",function(sym,e){sym.play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_adamsDot}","mouseenter",function(sym,e){sym.play(3000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_adamsDot}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3643,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_atkinsonDot}","mouseenter",function(sym,e){sym.play(4000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_atkinsonDot}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mckDot}","mouseenter",function(sym,e){sym.play(5000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mckDot}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5595,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_broughDot}","mouseenter",function(sym,e){sym.play(6000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_broughDot}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6750,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'classroombubble'
(function(symbolName){})("classroombubble");
//Edge symbol end:'classroombubble'
})(jQuery,AdobeEdge,"EDGE-22559045");