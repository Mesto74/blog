(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{485:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git分支的新建与合并-分支操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git分支的新建与合并-分支操作"}},[t._v("#")]),t._v(" Git分支的新建与合并-分支操作")]),t._v(" "),s("p",[t._v("文档："),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 分支 - 分支的新建与合并"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"创建分支并切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支并切换"}},[t._v("#")]),t._v(" 创建分支并切换")]),t._v(" "),s("p",[t._v("此时有一个需求需要在新的分支"),s("code",[t._v("iss53")]),t._v("上工作：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" iss53  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# b表示branch")]),t._v("\n")])])]),s("p",[t._v("它是下面两条命令的简写：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch iss53\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout iss53\n")])])]),s("h3",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),s("p",[t._v("突然有一个紧急问题要解决，需要在原来的"),s("code",[t._v("master")]),t._v("分支进行修复：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])]),s("p",[t._v("在切换到"),s("code",[t._v("master")]),t._v("之前，需要"),s("code",[t._v("iss53")]),t._v("分支保持好一个干净的状态（修改都已提交）。")]),t._v(" "),s("p",[s("strong",[t._v("注意：切换分支Git 会重置你的工作目录。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("checkout")]),t._v(" 中文含义 “检出”，"),s("code",[t._v("checkout <branch>")]),t._v(" 检出分支 => 检出指定分支的代码 => 重置工作目录并切换分支。")])]),t._v(" "),s("p",[t._v("接下来，你要修复这个紧急问题。 建立一个 "),s("code",[t._v("hotfix")]),t._v(" 分支，在该分支上工作直到问题解决：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" hotfix\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中间过程在hotfix上修改了代码并提交")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./hotfix.txt\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),t._v("\n")])])]),s("h3",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先切回master分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge hotfix "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 hotfix 分支合并过来")]),t._v("\n")])])]),s("h3",{attrs:{id:"删除分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" hotfix "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# d表示delete")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后切回iss53继续工作")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout iss53\n")])])]),s("p",[t._v("注意删除分支是在 "),s("code",[t._v("branch")]),t._v(" 命令上")]),t._v(" "),s("h3",{attrs:{id:"多次提交之后合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多次提交之后合并分支"}},[t._v("#")]),t._v(" 多次提交之后合并分支")]),t._v(" "),s("p",[t._v("假设你已经修正了 #53 问题，打算合并到"),s("code",[t._v("master")]),t._v("分支：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merga iss53\n")])])]),s("p",[t._v("这看似和之前的合并区别不大。此时你的开发历史从一个更早的地方开始分叉开来（diverged）。 因为，"),s("code",[t._v("master")]),t._v(" 分支所在提交并不是 "),s("code",[t._v("iss53")]),t._v(" 分支所在提交的直接祖先，Git 不得不做一些额外的工作。 出现这种情况的时候，Git 会使用两个分支的末端所指的快照以及这两个分支的公共祖先，做一个简单的"),s("strong",[t._v("三方合并")]),t._v("。")]),t._v(" "),s("p",[t._v("和之前将分支指针向前推进所不同的是，"),s("strong",[t._v("Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它")]),t._v("。 这个被称作一次合并提交，它的特别之处在于他有不止一个父提交。")]),t._v(" "),s("h3",{attrs:{id:"遇到冲突时的分支合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到冲突时的分支合并"}},[t._v("#")]),t._v(" 遇到冲突时的分支合并")]),t._v(" "),s("p",[t._v("如果你在两个不同的分支中，"),s("strong",[t._v("对同一个文件的同一个部分进行了不同的修改")]),t._v("，Git 就没法干净的合并它们，就产生了冲突。")]),t._v(" "),s("p",[t._v("合并过程中出现"),s("code",[t._v("CONFLICT")]),t._v("提升，表示有冲突")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge iss53\nAuto-merging index.html\nCONFLICT "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": Merge conflict "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" index.html\nAutomatic merge failed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" fix conflicts and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" commit the result.\n")])])]),s("p",[t._v("使用"),s("code",[t._v("git status")]),t._v("查看未合并状态。")]),t._v(" "),s("p",[t._v("任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 "),s("strong",[t._v("Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。")]),t._v(" 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("<<<<<<< HEAD:index.html\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("contact : email.support@github.com"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n=======\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n please contact us at support@github.com\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n>>>>>>> iss53:index.html\n")])])]),s("p",[t._v("你需要"),s("strong",[t._v("手动解决冲突")]),t._v("，解决了所有文件里的冲突之后，对每个文件"),s("strong",[t._v("使用 "),s("code",[t._v("git add")]),t._v(" 命令")]),t._v("来将其标记为冲突已解决。 "),s("strong",[t._v("一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决")]),t._v("。")]),t._v(" "),s("p",[t._v("如果你对结果感到满意，并且确定之前有冲突的的文件都已经暂存了，这时你可以输入 "),s("code",[t._v("git commit")]),t._v(" 来完成合并提交。")])])}),[],!1,null,null,null);s.default=n.exports}}]);