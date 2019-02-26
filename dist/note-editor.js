(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1190:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(6),c=n(7),u=n(1131),l=n(88),f=n(113),d=n(72),p=n.n(d),h=function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))};h.propTypes={openShareDialog:i.a.func.isRequired};var g=Object(s.b)(null,function(e){return{openShareDialog:function(){return e(c.a.actionCreators.showDialog({dialog:p.a.SHARE}))}}})(h),m=n(4),v=n.n(m),b=n(2),y=function(e){var t=e.onSelect,n=void 0===t?b.noop:t,o=e.selected,a=e.tag;return r.a.createElement("div",{className:v()("tag-chip",{selected:o}),"data-tag-name":a,onClick:n},a)};y.displayName="TagChip";var w=y;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=9,x=13,N=39,j=function(e){return function(t){return t.trim().toLowerCase().startsWith(e.trim().toLowerCase())}},R=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return T(O(O(n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?O(e):t}(this,(e=C(t)).call.apply(e,[this].concat(r))))),"state",{isComposing:!1}),T(O(O(n)),"completeSuggestion",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.identity,t=n.props,o=t.onChange,r=t.tagNames,a=t.value;if(a.length){var i=r.find(j(a));i&&o(i,function(){e(i),n.focusInput()})}}),T(O(O(n)),"focusInput",function(){if(n.inputField){var e=n.inputField;e.focus();var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}}),T(O(O(n)),"hasFocus",function(){return document.activeElement===n.inputField}),T(O(O(n)),"interceptKeys",function(e){var t;return Object(b.invoke)((T(t={},x,n.submitTag),T(t,F,n.interceptTabPress),T(t,N,n.interceptRightArrow),t),e.keyCode,e)}),T(O(O(n)),"interceptRightArrow",function(e){var t=n.props.value;window.getSelection().getRangeAt(0).endOffset===t.length&&(n.completeSuggestion(),e.preventDefault(),e.stopPropagation())}),T(O(O(n)),"interceptTabPress",function(e){n.completeSuggestion(n.submitTag),e.preventDefault(),e.stopPropagation()}),T(O(O(n)),"onInputMutation",function(e){e.forEach(function(e){var t=Object(b.get)(e,"target.data","");"childList"===e.type&&e.addedNodes.length&&(t=Object(b.get)(e,"target.innerText","")),n.onInput(t)})}),T(O(O(n)),"onInput",function(e){n.state.isComposing||(e.endsWith(",")&&e.trim().length?n.props.onSelect(e.slice(0,-1).trim()):n.props.onChange(e.trim(),n.focusInput))}),T(O(O(n)),"onCompositionEnd",function(e){var t=e.target.textContent;n.setState({isComposing:!1},function(){return n.onInput(t)})}),T(O(O(n)),"removePastedFormatting",function(e){var t;Object(b.get)(e,"clipboardData.getData")?t=e.clipboardData.getData("text/plain"):Object(b.get)(window,"clipboardData.getData")&&(t=window.clipboardData.getData("Text")),n.onInput(t),e.preventDefault(),e.stopPropagation()}),T(O(O(n)),"storeInput",function(e){n.inputField=e,n.props.inputRef(e),Object(b.invoke)(O(O(n)),"inputField.addEventListener","paste",n.removePastedFormatting,!1)}),T(O(O(n)),"submitTag",function(e){var t=n.props,o=t.onSelect,r=t.value;r.trim().length&&o(r.trim()),Object(b.invoke)(e,"preventDefault"),Object(b.invoke)(e,"stopPropagation")}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o["Component"]),function(e,t,n){t&&E(e.prototype,t),n&&E(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(b.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.tagNames,a=n.length&&o.find(j(n)),i=""===n&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},i&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},n),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(n.length):""))}}]),t}();T(R,"displayName","TagInput"),T(R,"propTypes",{inputRef:i.a.func,onChange:i.a.func,onSelect:i.a.func,storeFocusInput:i.a.func,storeHasFocus:i.a.func,tagNames:i.a.arrayOf(i.a.string).isRequired,value:i.a.string.isRequired}),T(R,"defaultProps",{inputRef:b.identity,onChange:b.identity,onSelect:b.identity,storeFocusInput:b.noop,storeHasFocus:b.noop});var P=R,_=n(10),I=n.n(_);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return q(K(K(n=function(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?K(e):t}(this,(e=D(t)).call.apply(e,[this].concat(r))))),"state",{selectedTag:"",tagInput:""}),q(K(K(n)),"addTag",function(e){var t=n.props,o=t.allTags,r=t.tags,a=e.trim().replace(/\s+/g,",").split(",");a.some(l.a)&&n.showEmailTooltip();var i=Object(b.union)(r,Object(b.intersectionBy)(o,a,function(e){return e.toLocaleLowerCase()}),Object(b.differenceBy)(a,o,function(e){return e.toLocaleLowerCase()}));n.updateTags(i),n.storeTagInput(""),Object(b.invoke)(K(K(n)),"tagInput.focus"),I.a.tracks.recordEvent("editor_tag_added")}),q(K(K(n)),"hasSelection",function(){return n.state.selectedTag&&!!n.state.selectedTag.length}),q(K(K(n)),"deleteTag",function(e){var t=n.props.tags,o=n.state.selectedTag;n.updateTags(Object(b.differenceBy)(t,[e],function(e){return e.toLocaleLowerCase()})),o===e&&n.setState({selectedTag:""},function(){Object(b.invoke)(K(K(n)),"tagInput.focus")}),I.a.tracks.recordEvent("editor_tag_removed")}),q(K(K(n)),"deleteSelection",function(){n.hasSelection()&&n.deleteTag(n.state.selectedTag)}),q(K(K(n)),"hideEmailTooltip",function(){return n.setState({showEmailTooltip:!1})}),q(K(K(n)),"hasFocus",function(){return n.inputHasFocus&&n.inputHasFocus()}),q(K(K(n)),"focusTagField",function(){return n.focusInput&&n.focusInput()}),q(K(K(n)),"interceptKeys",function(e){8===e.which&&(n.hasSelection()&&n.deleteSelection(),""===n.state.tagInput&&(n.selectLastTag(),e.preventDefault()))}),q(K(K(n)),"updateTags",function(e){return n.props.updateNoteTags({note:n.props.note,tags:e})}),q(K(K(n)),"selectLastTag",function(){return n.setState({selectedTag:n.props.tags.slice(-1).shift()})}),q(K(K(n)),"selectTag",function(e){var t=e.target.dataset.tagName;e.preventDefault(),e.stopPropagation(),n.deleteTag(t)}),q(K(K(n)),"showEmailTooltip",function(){n.setState({showEmailTooltip:!0}),setTimeout(function(){return n.setState({showEmailTooltip:!1})},5e3)}),q(K(K(n)),"onKeyDown",function(e){return n.state.showEmailTooltip&&n.hideEmailTooltip(),n.interceptKeys(e)}),q(K(K(n)),"storeFocusInput",function(e){return n.focusInput=e}),q(K(K(n)),"storeHasFocus",function(e){return n.inputHasFocus=e}),q(K(K(n)),"storeHiddenTag",function(e){return n.hiddenTag=e}),q(K(K(n)),"storeInputRef",function(e){return n.tagInput=e}),q(K(K(n)),"storeTagInput",function(e,t){return n.setState({tagInput:e},t)}),q(K(K(n)),"unselect",function(e){n.state.selectedTag&&n.hiddenTag!==e.relatedTarget&&n.setState({selectedTag:""})}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,o["Component"]),function(e,t,n){t&&H(e.prototype,t),n&&H(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0)}},{key:"componentDidUpdate",value:function(){this.hasSelection()&&this.hiddenTag.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.allTags,o=t.tags,a=this.state,i=a.selectedTag,s=a.showEmailTooltip,c=a.tagInput;return r.a.createElement("div",{className:"tag-field"},r.a.createElement("div",{className:v()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:"-1",onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:"-1",ref:this.storeHiddenTag}),o.filter(Object(b.negate)(l.a)).map(function(t){return r.a.createElement(w,{key:t,tag:t,selected:t===i,onSelect:e.selectTag})}),r.a.createElement(P,{allTags:n,inputRef:this.storeInputRef,value:c,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus,tagNames:Object(b.differenceBy)(n,o,function(e){return e.toLocaleLowerCase()})}),r.a.createElement(u.Overlay,{container:this,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:s,target:this.tagInput},r.a.createElement(g,{note:this.props.note}))))}}]),t}();q(L,"displayName","TagField"),q(L,"propTypes",{allTags:i.a.array.isRequired,note:i.a.object.isRequired,storeFocusTagField:i.a.func,storeHasFocus:i.a.func,tags:i.a.array.isRequired,unusedTags:i.a.arrayOf(i.a.string),updateNoteTags:i.a.func.isRequired,usedTags:i.a.arrayOf(i.a.string)}),q(L,"defaultProps",{storeFocusTagField:b.noop,storeHasFocus:b.noop,tags:[]});var B=Object(s.b)(null,{updateNoteTags:f.a})(L),W=n(64),U=n(660),z=n(1023),V=n.n(z);function X(e){return e.getCurrentContent().getPlainText("\n")}function J(e){var t=$("focus",e);return e.getCurrentContent().getBlockForKey(t)}function $(e,t){var n,o=t.getSelection();if("anchor"===e)n=o.getAnchorKey();else{if("focus"!==e)throw new Error("Key type string is invalid.");n=o.getFocusKey()}return"string"!=typeof n&&(n=n.key),n}var G=n(44),Q=n(735),Y=n.n(Q),Z=function(e){var t=e.children,n=e.className;return r.a.createElement("span",{className:n},t)};Z.propTypes={className:i.a.string.isRequired};var ee=Z;function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ne=function(e){return function(t,n){var o=t.getText();e&&o&&function(e,t){for(var n,o=[];null!==(n=t.exec(e));)o.push([n.index,t.lastIndex]);return o}(o,e).forEach(function(e){return function(t){var n=te(t,2),o=n[0],r=n[1];return e(o,r,{className:"search-match"})}}(n))}},oe=function(e){return e?new Y.a(ne(e),ee):null},re=n(667),ae=n(171),ie=n(1022),se=n.n(ie),ce=n(1021),ue=n.n(ce),le={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},fe=function(e){return n.e(7).then(function(){var e=n(1194);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}).then(function(t){var n=t.default;n.extension("enableCheckboxes",le);var o=new n.Converter({extensions:["enableCheckboxes"]});return o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],a=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(b.filter)(e.attributes,function(e){var n=e.name,o=e.value;return!(function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}default:return!1}}(t,n,o)||("href"===n||"src"===n)&&ue.a.isWebUri(o)||"href"===n&&o.startsWith("mailto:")&&se.a.validate(o.slice(7)))}).forEach(function(t){var n=t.name;return e.removeAttribute(n)});var a="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof a||a.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)a();return r.forEach(function(e){try{e.parentNode.removeChild(e)}catch(e){}}),o.forEach(function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)n.insertBefore(t,e);n.removeChild(e)}catch(e){}}),t.body.innerHTML}(o.makeHtml(e))})},de=n(621),pe=function(e){var t=e.text,n=e.taskNodeIndex,o=function(e){var t={text:"",ids:[]};return t.text=e.replace(de.c,function(e){var n=Object(ae.a)(8);return t.ids.push(n),e.replace(de.c,"$1"+"- [ ] ".concat(n))}),t}(t),r=o.text,a=o.ids;return fe(r).then(function(e){var t=function(e){var t=e.html,n=e.taskNodeIndex,o=(new DOMParser).parseFromString(t,"text/html").querySelectorAll(de.a.taskNode);return Array.from(o)[n].textContent.trim()}({html:e,taskNodeIndex:n});return a.indexOf(t)})},he=function(e){var t=/- \[[xX]\]/;return t.test(e)?e.replace(t,"- [ ]"):e.replace(/- \[\s?\]/,"- [x]")},ge=function(e){var t=e.text,n=e.index,o=0;return t.replace(de.c,function(e){return o++===n?he(e):e})},me=function(e){var t=e.taskNode,n=e.text,o=t.ownerDocument.querySelectorAll("".concat(de.a.markdownRoot," ").concat(de.a.taskNode)),r=n.match(de.c).length!==o.length,a=Array.from(o).indexOf(t);return r?pe({text:n,taskNodeIndex:a}).then(function(e){return ge({text:n,index:e})}):Promise.resolve(ge({text:n,index:a}))},ve=function(e){return new Y.a(function(t,n){for(var o,r=t.getText(),a=function(){var r=o[1],a=o[2],i=o.index+Object(b.get)(r,"length",0),s=i+a.length,c=/[xX]/.test(a),u=U.SelectionState.createEmpty(t.getKey()).merge({anchorOffset:i,focusOffset:s}),l=he(a);n(i,s,{checked:c,onChange:function(){return e(u,l)}})};null!==(o=de.c.exec(r));)a()},re.a)},be=function(e,t){return Object(b.get)(e.getCurrentContent().getBlockForKey(t),"text",null)},ye=function(e,t){var n=J(e),o=n.text,r=be(t,n.getKey());if(!(o!==r)||""===o)return!1;var a=Object(b.includes)(["backspace-character","remove-range"],e.getLastChangeType()),i=de.c.test(r)&&!o.match(de.c);return a&&i},we=function(e,t){var n=J(e),o=n.text,r=be(t,n.getKey())[e.getSelection().focusOffset];if(!/[ \]]/.test(r))return U.Modifier.insertText(e.getCurrentContent(),e.getSelection()," ");var a=Object(b.get)(o.match("-"),"index",0);return U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:a}),"backward")};function Se(e){for(var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=n.getEndKey(),a=t;o&&(a=Ee(o,a),o!==r);)o=t.getKeyAfter(o);var i=U.EditorState.push(e,a,"insert-characters"),s=function(e,t,n){var o=Object(b.get)(e.focusKey,"key",e.focusKey),r=function(e){return e.getBlockForKey(o).getText().length},a=r(n)-r(t),i=e.focusOffset+a;return U.SelectionState.createEmpty(o).merge({anchorOffset:i,focusOffset:i})}(n,t,a);return U.EditorState.forceSelection(i,s)}function Ee(e,t){var n=t.getBlockForKey(e).getText();de.c.lastIndex=0;var o,r=de.c.exec(n);if(r){var a=r[1],i=r[2],s=r[3].match(/^\s*/)[0].length,c=a.length,u=U.SelectionState.createEmpty(e).merge({anchorOffset:c,focusOffset:c+i.length+s});o=U.Modifier.removeRange(t,u,"backward")}else{var l=n.match(/^\s*/)[0].length,f=U.SelectionState.createEmpty(e).merge({anchorOffset:l,focusOffset:l});o=U.Modifier.insertText(t,f,"- [ ] ")}return o}var Ce=n(170);function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fe(e,t){return(Fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je="\n",Re=function(e){return Object(b.includes)(["-","*","+","- [ ]","- [x]"],e.trim())};function Pe(e,t){var n=U.EditorState.push(e,U.Modifier.splitBlock(e.getCurrentContent(),e.getSelection()),"split-block"),o=U.EditorState.push(n,U.Modifier.insertText(n.getCurrentContent(),n.getCurrentContent().getSelectionAfter(),t),"insert-characters");return U.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}var _e=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Ne(xe(xe(n=function(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?xe(e):t}(this,(e=Te(t)).call.apply(e,[this].concat(r))))),"ipc",Object(Ce.a)()),Ne(xe(xe(n)),"replaceRangeWithText",function(e,t){var o=n.state.editorState,r=U.Modifier.replaceText(o.getCurrentContent(),e,t);n.handleEditorStateChange(U.EditorState.push(o,r,"replace-text"))}),Ne(xe(xe(n)),"createNewEditorState",function(e,t){var o=U.EditorState.createWithContent(U.ContentState.createFromText(e,je),new V.a(Object(b.compact)([Object(G.b)(t)&&oe(Object(G.c)(t)),ve(n.replaceRangeWithText)])));return U.EditorState.forceSelection(o,U.SelectionState.createEmpty(o.getCurrentContent().getFirstBlock()).merge({hasFocus:!1}))}),Ne(xe(xe(n)),"state",{editorState:n.createNewEditorState(n.props.content.text,n.props.filter)}),Ne(xe(xe(n)),"editorKey",0),Ne(xe(xe(n)),"handleEditorStateChange",function(e){var t=n.state.editorState;if(e!==t){var o=e;if(ye(e,t)){var r=we(e,t);o=U.EditorState.push(e,r,"remove-range")}var a=X(o),i=X(t),s=a!==i;if(e.getSelection().hasFocus===t.getSelection().hasFocus||s){var c=s?function(){return n.props.onChangeContent(a)}:b.noop;n.setState({editorState:o},c)}}}),Ne(xe(xe(n)),"reflectChangesFromReceivedContent",function(e,t){var o=U.EditorState.push(e,U.ContentState.createFromText(t,je),"replace-text");if(e.getSelection().getHasFocus()){var r=function(e,t){for(var n,o,r=$("anchor",e),a=$("focus",e),i=e.getCurrentContent().getBlocksAsArray(),s=0;s<i.length;s++)i[s].getKey()===r&&(n=s),i[s].getKey()===a&&(o=s);var c=t.getCurrentContent().getBlocksAsArray(),u=e.getSelection(),l=c.length-1,f=Math.min(n,l),d=Math.min(o,l),p=Math.min(u.getAnchorOffset(),c[f].getLength()),h=Math.min(u.getFocusOffset(),c[d].getLength());return t.getSelection().merge({anchorKey:c[f].getKey(),anchorOffset:p,focusKey:c[d].getKey(),focusOffset:h,isBackward:u.getIsBackward(),hasFocus:u.getHasFocus()})}(e,o);o=U.EditorState.forceSelection(o,r)}n.setState({editorState:o})}),Ne(xe(xe(n)),"saveEditorRef",function(e){n.editor=e}),Ne(xe(xe(n)),"focus",function(){Object(b.invoke)(xe(xe(n)),"editor.focus")}),Ne(xe(xe(n)),"hasFocus",function(){return document.activeElement===Object(b.get)(n.editor,"editor")}),Ne(xe(xe(n)),"onTab",function(e){var t=n.state.editorState;e.preventDefault(),!t.getSelection().isCollapsed()&&e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||n.handleEditorStateChange(e.shiftKey?function(e){var t=e.getSelection(),n=t.getStartOffset(),o=J(e).getText(),r=Re(o),a=r?0:n-1,i=r?1:n;if("\t"!==o.slice(a,i))return e;var s=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),t.merge({anchorOffset:a,focusOffset:i})),"remove-range");return U.EditorState.forceSelection(s,t.merge({anchorOffset:n-1,focusOffset:n-1}))}(t):function(e){var t=e.getSelection(),n=t.getStartOffset(),o=J(e).getText(),r=Re(o)?0:n,a=U.EditorState.push(e,U.Modifier.replaceText(e.getCurrentContent(),t.isCollapsed()?t.merge({anchorOffset:r,focusOffset:r}):t,"\t"),"insert-characters");return U.EditorState.forceSelection(a,a.getSelection().merge({anchorOffset:n+1,focusOffset:n+1}))}(t))}),Ne(xe(xe(n)),"handleReturn",function(){var e=n.state.editorState,t=J(e).getText(),o=t.search(/\S/),r=function(t){var n=e.getSelection(),o=n.anchorOffset,r=n.focusOffset;return o===t&&r===t};if(r(0)||r(o))return"not-handled";if(Re(t))return n.handleEditorStateChange(function(e){var t=U.EditorState.push(e,U.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:0,focusOffset:J(e).getLength()})),"remove-range");return U.EditorState.forceSelection(t,t.getCurrentContent().getSelectionAfter())}(e)),"handled";var a=t.match(/^[ \t\u2000-\u200a]*[-*+]\s/);if(t.match(de.c)){var i=t.replace(de.c,"$1- [ ] ");return n.handleEditorStateChange(Pe(e,i)),"handled"}return a?(n.handleEditorStateChange(Pe(e,a[0])),"handled"):"not-handled"}),Ne(xe(xe(n)),"onAppCommand",function(e,t){"insertChecklist"===Object(b.get)(t,"action")&&(n.handleEditorStateChange(Se(n.state.editorState)),I.a.tracks.recordEvent("editor_checklist_inserted"))}),Ne(xe(xe(n)),"copyPlainText",function(e){var t=function(e){var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=e.getCurrentContent().getBlockForKey(o),a=n.getStartOffset(),i=n.getEndKey(),s=n.getEndOffset();if(o===i)return r.getText().slice(a,s);var c="";c+=r.getText().slice(a)+"\n";for(var u=e.getCurrentContent().getBlockForKey(i),l=r;(l=t.getBlockAfter(l.key))&&l.key!==i;)c+=l.getText()+"\n";return c+=u.getText().slice(0,s)}(n.state.editorState);e.clipboardData.setData("text/plain",t),e.preventDefault()}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fe(e,t)}(t,o["Component"]),function(e,t,n){t&&Oe(e.prototype,t),n&&Oe(e,n)}(t,[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focus),this.props.storeHasFocus(this.hasFocus),this.ipc.on("appCommand",this.onAppCommand)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.content,o=t.filter,r=t.noteId;t.spellCheckEnabled!==e.spellCheckEnabled&&(this.editorKey+=1,this.forceUpdate()),r===e.noteId&&n.version===e.content.version&&o===e.filter?n.text!==e.content.text&&n.hasRemoteUpdate&&this.reflectChangesFromReceivedContent(this.state.editorState,n.text):this.setState({editorState:this.createNewEditorState(n.text,o)})}},{key:"componentWillUnmount",value:function(){this.ipc.removeListener("appCommand",this.onAppCommand)}},{key:"render",value:function(){return r.a.createElement("div",{onCopy:this.copyPlainText,onCut:this.copyPlainText,style:{height:"100%"}},r.a.createElement(U.Editor,{key:this.editorKey,ref:this.saveEditorRef,spellCheck:this.props.spellCheckEnabled,stripPastedStyles:!0,onChange:this.handleEditorStateChange,editorState:this.state.editorState,onTab:this.onTab,handleReturn:this.handleReturn}))}}]),t}();Ne(_e,"propTypes",{content:i.a.shape({text:i.a.string.isRequired,hasRemoteUpdate:i.a.bool.isRequired}),filter:i.a.string.isRequired,noteId:i.a.string,onChangeContent:i.a.func.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),Ne(_e,"defaultProps",{storeFocusEditor:b.noop,storeHasFocus:b.noop});var Ie=n(173),Me=function(e,t){fe(t).then(function(t){return e.innerHTML=t,e.querySelectorAll("pre code")}).then(function(e){if(e.length)return n.e(8).then(function(){var e=n(1193);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})}).then(function(t){var n=t.default;e.forEach(n.highlightBlock)}).catch(console.log)})};function He(e){return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ke(e,t){return(Ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Be=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Le(qe(qe(n=function(e,t){return!t||"object"!==He(t)&&"function"!=typeof t?qe(e):t}(this,(e=Ae(t)).call.apply(e,[this].concat(r))))),"focusEditor",function(){return n.focusContentEditor&&n.focusContentEditor()}),Le(qe(qe(n)),"saveEditorRef",function(e){return n.editor=e}),Le(qe(qe(n)),"isValidNote",function(e){return e&&e.id}),Le(qe(qe(n)),"copyRenderedNote",function(e){var t=n.props,o=t.previewingMarkdown,r=t.showNoteInfo,a=t.dialogs;if(!o)return!0;if(r||a.length>0)return!0;if(!document.getSelection().isCollapsed)return!0;var i=document.createDocumentFragment(),s=document.createElement("div");Me(s,n.props.note.data.content),i.appendChild(s),e.clipboardData.setData("text/plain",s.innerHTML),e.preventDefault()}),Le(qe(qe(n)),"hasFocus",function(){return n.editorHasFocus&&n.editorHasFocus()}),Le(qe(qe(n)),"onPreviewClick",function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===t.tagName){e.preventDefault(),Object(W.a)(t.href);break}if("task-list-item"===t.className)if("break"===function(){e.preventDefault();var o=n.props,r=o.note,a=o.noteBucket,i=o.updateNoteContent;return me({taskNode:t,text:r.data.content}).then(function(e){i({noteBucket:a,note:r,content:e})}).catch(console.log),"break"}())break}}),Le(qe(qe(n)),"saveNote",function(e){var t=n.props.note;n.isValidNote(t)&&(n.props.onChangeContent(t,e),I.a.tracks.recordEvent("editor_note_edited"))}),Le(qe(qe(n)),"storeEditorHasFocus",function(e){return n.editorHasFocus=e}),Le(qe(qe(n)),"storeFocusContentEditor",function(e){return n.focusContentEditor=e}),Le(qe(qe(n)),"storePreview",function(e){return n.previewNode=e}),Le(qe(qe(n)),"updateMarkdown",function(){n.previewNode&&Me(n.previewNode,n.props.note.data.content)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ke(e,t)}(t,o["Component"]),function(e,t,n){t&&De(e.prototype,t),n&&De(e,n)}(t,[{key:"componentWillMount",value:function(){this.queueNoteSave=Object(b.debounce)(this.saveNote,2e3),document.addEventListener("copy",this.copyRenderedNote,!1)}},{key:"componentDidMount",value:function(){var e=this.props.previewingMarkdown;this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus),window.addEventListener("beforeunload",this.queueNoteSave.flush),e&&this.updateMarkdown()}},{key:"componentWillReceiveProps",value:function(){this.queueNoteSave.flush()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.filter,o=t.note,r=t.onNotePrinted,a=t.previewingMarkdown,i=t.shouldPrint,s=Object(b.get)(o,"data.content","");i&&(window.print(),r()),this.isValidNote(o)&&""===s&&""===n&&Object(b.invoke)(this,"editor.focus");var c=Object(b.get)(e,"note.data.content",""),u=Object(b.get)(this.props,"note.data.content","");(a&&(e.note!==o||c!==u)||!e.previewingMarkdown&&this.props.previewingMarkdown)&&this.updateMarkdown()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.queueNoteSave.flush),document.removeEventListener("copy",this.copyRenderedNote,!1)}},{key:"render",value:function(){var e=this.props,t=e.note,n=e.filter,o=e.fontSize,a=e.isViewingRevisions,i=e.previewingMarkdown,s=e.spellCheckEnabled,c={text:Object(b.get)(t,"data.content",""),hasRemoteUpdate:Object(b.get)(t,"hasRemoteUpdate",!1),version:Object(b.get)(t,"version",void 0)},u={fontSize:"".concat(o,"px")},l=v()("note-detail",{"is-viewing-revisions":a});return r.a.createElement("div",{className:"note-detail-wrapper"},t?r.a.createElement("div",{className:l},i&&r.a.createElement("div",{ref:this.storePreview,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,onClick:this.onPreviewClick,style:u}),!i&&r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:u},r.a.createElement(_e,{ref:this.saveEditorRef,spellCheckEnabled:s,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus,noteId:Object(b.get)(t,"id",null),content:c,filter:n,onChangeContent:this.queueNoteSave}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(Ie.a,null)))}}]),t}();Le(Be,"displayName","NoteDetail"),Le(Be,"propTypes",{dialogs:i.a.array.isRequired,filter:i.a.string.isRequired,fontSize:i.a.number,isViewingRevisions:i.a.bool.isRequired,onChangeContent:i.a.func.isRequired,onNotePrinted:i.a.func.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,previewingMarkdown:i.a.bool,shouldPrint:i.a.bool.isRequired,showNoteInfo:i.a.bool.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func,updateNoteContent:i.a.func.isRequired}),Le(Be,"defaultProps",{storeFocusEditor:b.noop,storeHasFocus:b.noop});var We=c.a.actionCreators,Ue=We.setShouldPrintNote,ze={onNotePrinted:function(){return Ue({shouldPrint:!1})},updateNoteContent:We.updateNoteContent},Ve=Object(s.b)(function(e){var t=e.appState,n=e.settings;return{dialogs:t.dialogs,filter:t.filter,isViewingRevisions:t.isViewingRevisions,shouldPrint:t.shouldPrint,showNoteInfo:t.showNoteInfo,spellCheckEnabled:n.spellCheckEnabled}},ze)(Be);function Xe(e){return(Xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Je(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"NoteEditor",function(){return Ze});var Ze=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Ye(Qe(Qe(n=function(e,t){return!t||"object"!==Xe(t)&&"function"!=typeof t?Qe(e):t}(this,(e=$e(t)).call.apply(e,[this].concat(r))))),"handleShortcut",function(e){var t=e.ctrlKey,o=e.key,r=e.metaKey,a=e.shiftKey,i=t||r;if(i&&"P"===o&&n.props.markdownEnabled){var s="edit"===n.props.editorMode?"markdown":"edit";return n.props.setEditorMode({mode:s}),e.stopPropagation(),e.preventDefault(),!1}if(n.props.isSmallScreen&&i&&a&&"n"===o)return n.props.closeNote(),n.props.onNoteClosed(),e.stopPropagation(),e.preventDefault(),!1;if(i&&"t"===o&&n.props.isEditorActive){if(!n.editFieldHasFocus())return n.focusNoteEditor&&n.focusNoteEditor(),e.stopPropagation(),e.preventDefault(),!1;if(!n.tagFieldHasFocus())return n.focusTagField&&n.focusTagField(),e.stopPropagation(),e.preventDefault(),!1}return!0}),Ye(Qe(Qe(n)),"editFieldHasFocus",function(){return n.editorHasFocus&&n.editorHasFocus()}),Ye(Qe(Qe(n)),"storeEditorHasFocus",function(e){return n.editorHasFocus=e}),Ye(Qe(Qe(n)),"storeFocusEditor",function(e){return n.focusNoteEditor=e}),Ye(Qe(Qe(n)),"storeFocusTagField",function(e){return n.focusTagField=e}),Ye(Qe(Qe(n)),"storeTagFieldHasFocus",function(e){return n.tagFieldHasFocus=e}),Ye(Qe(Qe(n)),"tagFieldHasFocus",function(){return n.tagFieldHasFocus&&n.tagFieldHasFocus()}),Ye(Qe(Qe(n)),"toggleShortcuts",function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(t,o["Component"]),function(e,t,n){t&&Je(e.prototype,t),n&&Je(e,n)}(t,[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this.props,t=e.editorMode,n=e.note,o=e.noteBucket,a=e.fontSize,i=this.props.revision||n,s=i&&i.data&&i.data.tags||[],c=!(!n||!n.data.deleted),u=i&&i.data&&i.data.systemTags&&-1!==i.data.systemTags.indexOf("markdown");return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement(Ve,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus,filter:this.props.filter,note:i,noteBucket:o,previewingMarkdown:u&&"markdown"===t,onChangeContent:this.props.onUpdateContent,fontSize:a}),n&&!c&&r.a.createElement(B,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus,allTags:this.props.allTags.map(Object(b.property)("data.name")),note:this.props.note,tags:s}))}}]),t}();Ye(Ze,"displayName","NoteEditor"),Ye(Ze,"propTypes",{allTags:i.a.array.isRequired,closeNote:i.a.func.isRequired,editorMode:i.a.oneOf(["edit","markdown"]),isEditorActive:i.a.bool.isRequired,isSmallScreen:i.a.bool.isRequired,filter:i.a.string.isRequired,markdownEnabled:i.a.bool.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,fontSize:i.a.number,onNoteClosed:i.a.func.isRequired,onUpdateContent:i.a.func.isRequired,revision:i.a.object,setEditorMode:i.a.func.isRequired}),Ye(Ze,"defaultProps",{editorMode:"edit",note:{data:{tags:[]}}});var et=c.a.actionCreators,tt=et.closeNote,nt=et.setEditorMode;t.default=Object(s.b)(function(e){var t=e.appState,n=e.settings;return{allTags:t.tags,filter:t.filter,fontSize:n.fontSize,editorMode:t.editorMode,isEditorActive:!t.showNavigation,markdownEnabled:n.markdownEnabled,revision:t.revision}},function(e){return{closeNote:function(){return e(tt())},setEditorMode:function(t){return e(nt(t))}}})(Ze)},621:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a});var o={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},r=/^(\s*)(-[ \t]+\[[xX\s]?\])/g,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},667:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a);function s(){return r.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function c(){return r.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("g",{transform:"translate(2 2)"},r.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var u=function(e){var t=e.checked,n=void 0!==t&&t,o=e.onChange;return r.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:o,tabIndex:"0"},r.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?r.a.createElement(s,null):r.a.createElement(c,null)))};u.propTypes={checked:i.a.bool,onChange:i.a.func};t.a=u}}]);