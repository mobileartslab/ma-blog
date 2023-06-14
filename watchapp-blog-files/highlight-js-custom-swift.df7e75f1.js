/*!
 * This source file is part of the Swift.org open source project
 * 
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 * 
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["highlight-js-custom-swift","highlight-js-swift"],{"2a39":function(e,n){function t(e){return e?"string"===typeof e?e:e.source:null}function a(e){return i("(?=",e,")")}function i(...e){const n=e.map(e=>t(e)).join("");return n}function s(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function c(...e){const n=s(e),a="("+(n.capture?"":"?:")+e.map(e=>t(e)).join("|")+")";return a}const u=e=>i(/\b/,e,/\w$/.test(e)?/\b/:/\B/),o=["Protocol","Type"].map(u),r=["init","self"].map(u),l=["Any","Self"],d=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","distributed","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],m=["false","nil","true"],p=["assignment","associativity","higherThan","left","lowerThan","none","right"],F=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],b=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],f=c(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),h=c(f,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=i(f,h,"*"),y=c(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),g=c(y,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),E=i(y,g,"*"),v=i(/[A-Z]/,g,"*"),A=["autoclosure",i(/convention\(/,c("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",i(/objc\(/,E,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],N=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function k(e){const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{contains:["self"]}),s=[e.C_LINE_COMMENT_MODE,t],f={match:[/\./,c(...o,...r)],className:{2:"keyword"}},y={match:i(/\./,c(...d)),relevance:0},k=d.filter(e=>"string"===typeof e).concat(["_|0"]),C=d.filter(e=>"string"!==typeof e).concat(l).map(u),D={variants:[{className:"keyword",match:c(...C,...r)}]},B={$pattern:c(/\b\w+/,/#\w+/),keyword:k.concat(F),literal:m},_=[f,y,D],S={match:i(/\./,c(...b)),relevance:0},x={className:"built_in",match:i(/\b/,c(...b),/(?=\()/)},M=[S,x],I={match:/->/,relevance:0},$={className:"operator",relevance:0,variants:[{match:w},{match:`\\.(\\.|${h})+`}]},O=[I,$],L="([0-9]_*)+",T="([0-9a-fA-F]_*)+",j={className:"number",relevance:0,variants:[{match:`\\b(${L})(\\.(${L}))?([eE][+-]?(${L}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${L}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},K=(e="")=>({className:"subst",variants:[{match:i(/\\/,e,/[0\\tnr"']/)},{match:i(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),P=(e="")=>({className:"subst",match:i(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),z=(e="")=>({className:"subst",label:"interpol",begin:i(/\\/,e,/\(/),end:/\)/}),q=(e="")=>({begin:i(e,/"""/),end:i(/"""/,e),contains:[K(e),P(e),z(e)]}),U=(e="")=>({begin:i(e,/"/),end:i(/"/,e),contains:[K(e),z(e)]}),Z={className:"string",variants:[q(),q("#"),q("##"),q("###"),U(),U("#"),U("##"),U("###")]},V={match:i(/`/,E,/`/)},W={className:"variable",match:/\$\d+/},G={className:"variable",match:`\\$${g}+`},J=[V,W,G],R={match:/(@|#(un)?)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:N,contains:[...O,j,Z]}]}},X={className:"keyword",match:i(/@/,c(...A))},H={className:"meta",match:i(/@/,E)},Q=[R,X,H],Y={match:a(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,g,"+")},{className:"type",match:v,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:i(/\s+&\s+/,a(v)),relevance:0}]},ee={begin:/</,end:/>/,keywords:B,contains:[...s,..._,...Q,I,Y]};Y.contains.push(ee);const ne={match:i(E,/\s*:/),keywords:"_|0",relevance:0},te={begin:/\(/,end:/\)/,relevance:0,keywords:B,contains:["self",ne,...s,..._,...M,...O,j,Z,...J,...Q,Y]},ae={begin:/</,end:/>/,contains:[...s,Y]},ie={begin:c(a(i(E,/\s*:/)),a(i(E,/\s+/,E,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:E}]},se={begin:/\(/,end:/\)/,keywords:B,contains:[ie,...s,..._,...O,j,Z,...Q,Y,te],endsParent:!0,illegal:/["']/},ce={match:[/func/,/\s+/,c(V.match,E,w)],className:{1:"keyword",3:"title.function"},contains:[ae,se,n],illegal:[/\[/,/%/]},ue={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[ae,se,n],illegal:/\[|%/},oe={match:[/operator/,/\s+/,w],className:{1:"keyword",3:"title"}},re={begin:[/precedencegroup/,/\s+/,v],className:{1:"keyword",3:"title"},contains:[Y],keywords:[...p,...m],end:/}/};for(const a of Z.variants){const e=a.contains.find(e=>"interpol"===e.label);e.keywords=B;const n=[..._,...M,...O,j,Z,...J];e.contains=[...n,{begin:/\(/,end:/\)/,contains:["self",...n]}]}return{name:"Swift",keywords:B,contains:[...s,ce,ue,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:B,contains:[e.inherit(e.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),..._]},oe,re,{beginKeywords:"import",end:/$/,contains:[...s],relevance:0},..._,...M,...O,j,Z,...J,...Q,Y,te]}}e.exports=k},ee7a:function(e,n,t){"use strict";t.r(n);t("ddb0");var a=t("2a39"),i=t.n(a);n["default"]=function(e){const n=i()(e);n.keywords.keyword=[...n.keywords.keyword,"distributed"];const t=({beginKeywords:e=""})=>e.split(" ").includes("class"),a=n.contains.findIndex(t);if(a>=0){const{beginKeywords:e,...t}=n.contains[a];n.contains[a]={...t,begin:/\b(struct|protocol|extension|enum|actor|class\b(?!.*\bfunc))\b/}}return n}}}]);