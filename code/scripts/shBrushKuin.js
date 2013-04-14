/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */

/**
 * SyntaxHighlighter for Kuin
 * http://monora.me/kuin
 *
 * @version
 * 0.07 (2013.03.20) @tatt61880
 *    * N進表記の色分けに対応。
 *    * skipをkeywordsに追加。
 * 0.06 (2012.09.17) @tatt61880
 *    * 3重までのコメントネストに対応。
 * 0.05 (2012.09.16) @tatt61880
 *    * import, foreach, alias, try, ifdef, block, assert, throw をkeywordに追加
 *    * byte型のkeywordを修正
 *    * ratioの綴りを修正
 *    * enumをdatatypesからkeywordsに変更
 *    * swapをkeywordsからoperatorに変更
 * 0.04 (2012.09.11) @tatt61880
 *    * switch, case, defaultをkeywordに追加
 *    * コメントを修正
 * 0.03 (2012.09.03) @kyonline
 *    * @演算子を追加
 * 0.02 (2012.09.02) @kyonline
 *    * do の色を変更
 *    * 関数名に色付け
 * 0.01 (2012.08.28) @kyonline
 */
;(function()
{
	// CommonKuin
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush() {
		var datatypes = 'int byte8 byte16 byte32 byte64 sbyte8 sbyte16 sbyte32 sbyte64 float char bool complex money ratio list stack queue dict';
		var keywords = 'import func var const alias class enum if elif else switch case default while for foreach try ifdef block break continue return assert throw end skip';
		var operator = 'is nis in nin new swap';

		this.regexList = [
			{ regex: /{[^{}]*?(?:{[^{}]*?(?:{[^{}]*?}[^{}]*?)*?}[^{}]*?)*?}/gm, css: 'comments' },	// comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,   css: 'string'   },	// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,   css: 'string'   },	// strings
			{ regex: /\b[\d]+(\.[\d]+)?\b/gi,                         css: 'value'    },	// numbers
			{ regex: /#[0-9A-Z]+\b/gi,                                css: 'value'    },	// numbers

			{ regex: /\w[\w\d]*@[\w\d]*/gi,                           css: 'functions'},	// global variables/functions
			{ regex: new RegExp('@'+this.getKeywords(operator), 'gm'),css: 'functions'},	// @operator
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),   css: 'variable' },	// datatype
			{ regex: new RegExp(this.getKeywords(keywords),  'gm'),   css: 'keyword'  },	// keywords
			{ regex: /do/gi,                                          css: 'color3'   } 	// do
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['kuin'];

	SyntaxHighlighter.brushes.Kuin = Brush;

	// CommonKuin
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
