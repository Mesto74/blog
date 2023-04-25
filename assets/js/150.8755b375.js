(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{479:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rebase分支合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rebase分支合并"}},[t._v("#")]),t._v(" rebase分支合并")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("以下 "),s("code",[t._v("v2")]),t._v(" 是某个需求的开发分支， "),s("code",[t._v("dev")]),t._v("是总的开发分支，"),s("code",[t._v("v2")]),t._v(" 是基于"),s("code",[t._v("dev")]),t._v("分支签出的。")]),t._v(" "),s("p",[t._v("当完成"),s("code",[t._v("v2")]),t._v("的开发后，需要把代码合并到"),s("code",[t._v("dev")]),t._v("，我们可以使用"),s("code",[t._v("rebase")]),t._v("进行合并：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先将 v2 push到远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin v2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 dev 拉取最新代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 v2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout v2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 v2 的所有[commit] 变基到(应用到) dev")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 dev")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge v2  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 dev分支 快进合并 （此时 (HEAD -> dev, v2) [commit] 两个分支指向同一个提交）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 原v2的[commit]记录 是否在dev分支的最前面（变基成功会把v2的提交记录应用到dev分支的最前面）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果到这一步发现有问题，尝试使用 git --abort中止变基，如果还是有问题的可以在dev分支上使用《后悔药》操作， 再到v2分支上使用《后悔药》操作，即可使两个分支都回退到 rebase变基 之前的状态")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 试运行项目是否有问题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" start\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看状态是否有问题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库的 dev")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"变基要遵守的准则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基要遵守的准则"}},[t._v("#")]),t._v(" 变基要遵守的准则")]),t._v(" "),s("p",[s("strong",[t._v("几个人同时在一个分支上进行开发和提交时，开发中途请不要私自执行变基，只有在大家都完成工作之后才可以执行变基。")])]),t._v(" "),s("h3",{attrs:{id:"变基的实质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变基的实质"}},[t._v("#")]),t._v(" 变基的实质")]),t._v(" "),s("p",[t._v("变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。\n因此，"),s("strong",[t._v("变基操作过后的分支将不要再使用")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"后悔药"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后悔药"}},[t._v("#")]),t._v(" 后悔药")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看HEAD指针变动记录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 记录示例(当前分支是v2):")]),t._v("\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": checkout: moving from master to v2\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": returning to refs/heads/master\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": checkout v2\n15a97d8 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": reset: moving to 15a97d8\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": merge v2: Fast-forward\n15a97d8 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": checkout: moving from v2 to master\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finish"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": returning to refs/heads/v2\n07c398f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": C\n15a97d8 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": checkout master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首次rebase")]),t._v("\nd278ecd HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": checkout: moving from master to v2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rebase前的状态")]),t._v("\n15a97d8 HEAD@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: D\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可见，示例中最初的 rebase 操作是 HEAD@{8}，想回退到变基前的状态需让指针指向 HEAD@{9}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" d278ecd  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的HEAD为指定[commit]，同时重置暂存区和工作区，与指定[commit]一致")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时打印 log 查看是否回到之前的状态")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),s("p",[s("strong",[t._v("注意：此操作只能回退当前的分支，如其他分支也要回退，需要切换到该分支并执行上面操作。")])]),t._v(" "),s("h2",{attrs:{id:"开发期间的rebase操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发期间的rebase操作"}},[t._v("#")]),t._v(" 开发期间的rebase操作")]),t._v(" "),s("h3",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("有两个分支：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("dev\n*v2\n")])])]),s("p",[s("code",[t._v("v2")]),t._v(" 是基于"),s("code",[t._v("dev")]),t._v("切出来的。")]),t._v(" "),s("p",[t._v("提交记录如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t\tdev\na - b - c\n\t\tv2\n")])])]),s("p",[t._v("开发期间，两个分支同时有新的commit ：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t\t\t\tdev\na - b - c - d - e\n\t\t\\ - f - g\n\t\t\t\tv2\n")])])]),s("p",[t._v("当前你正在"),s("code",[t._v("v2")]),t._v("进行开发，"),s("code",[t._v("dev")]),t._v("也同时进行开发，并有重大的改变，你需要把"),s("code",[t._v("dev")]),t._v("的提交同步到"),s("code",[t._v("v2")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("需求： 把"),s("code",[t._v("dev")]),t._v("中新的提交同步到"),s("code",[t._v("v2")]),t._v("，且不能影响"),s("code",[t._v("dev")]),t._v("分支。")])]),t._v(" "),s("h3",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("基于最新的 "),s("code",[t._v("dev")]),t._v(" 切一个新的分支 "),s("code",[t._v("dev-copy")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("dev-copy")]),t._v(" 和 "),s("code",[t._v("dev")]),t._v("  两者的 commit ID 一致。")])])]),t._v(" "),s("li",[s("p",[t._v("在"),s("code",[t._v("dev-copy")]),t._v("中执行rebase，将 "),s("code",[t._v("dev-copy")]),t._v(" 的提交变基到 "),s("code",[t._v("v2")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase v2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 dev-copy 的提交[commit] 变基到(应用到) v2")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("删除原"),s("code",[t._v("v2")]),t._v("分支，将"),s("code",[t._v("dev-copy")]),t._v("分支名改为"),s("code",[t._v("v2")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前在 dev-copy 分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" v2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" dev-copy v2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重命名")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"git-cherry-pick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[t._v("#")]),t._v(" git cherry-pick")]),t._v(" "),s("p",[t._v("来源："),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《git cherry-pick 教程》"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("用于将单个或几个"),s("code",[t._v("[commit]")]),t._v("复制到另一个分支。")]),t._v(" "),s("h3",{attrs:{id:"基本应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本应用"}},[t._v("#")]),t._v(" 基本应用")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将commitHash应用于当前分支")]),t._v("\n")])])]),s("p",[t._v("上面命令就会将指定的提交"),s("code",[t._v("commitHash")]),t._v("，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的"),s("strong",[t._v("哈希值会不一样")]),t._v("。")]),t._v(" "),s("p",[t._v("git cherry-pick命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。")]),t._v(" "),s("h3",{attrs:{id:"转移多个提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转移多个提交"}},[t._v("#")]),t._v(" 转移多个提交")]),t._v(" "),s("p",[t._v("Cherry pick 支持一次转移多个提交。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HashA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HashB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A和B提交")]),t._v("\n")])])]),s("p",[t._v("上面的命令将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交。")]),t._v(" "),s("p",[t._v("如果想要转移一系列的连续提交，可以使用下面的简便语法。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A到B提交，不包含A")]),t._v("\n")])])]),s("p",[t._v("上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。")]),t._v(" "),s("p",[s("strong",[t._v("注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick A^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("B "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A到B提交，包含A")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);