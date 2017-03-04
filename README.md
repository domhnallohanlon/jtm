# jekyll-theme-materialize

[![Build Status](https://travis-ci.org/KeJunMao/jekyll-theme-materialize.svg?branch=master)](https://travis-ci.org/KeJunMao/jekyll-theme-materialize)[![Gem Version](https://badge.fury.io/rb/jekyll-theme-materialize.svg)](https://badge.fury.io/rb/jekyll-theme-materialize)

## 安装

添加下行到你 Jekyll 的 `Gemfile`文件中:

```ruby
gem "jekyll-theme-materialize"
```

添加下行到你 Jekyll 的`_config.yml`文件中 :

```yaml
theme: jekyll-theme-materialize
```

然后执行:

    $ bundle

或手动执行:

    $ gem install jekyll-theme-materialize

## 用法

将如下内容添加到你Jekyll 的`_config.yml`文件中，请注意替换为你自己的信息：

```yaml
title: KeJun | BLOG
email: kejun1997@gmail.com
description: 二次元智障
url: "https://blog.kejun.tk/" 

# icon
icon-16x16: images/icon/favicon-16x16.ico
icon-32x32: images/icon/favicon-32x32.ico

# theme color
theme-color: { 
  default-color: green, 
  home-color: green,
  about-color: red,
  archive-color: pink,
  links-color: purple,
  tags-color: blue
} 

# mobile nav
mobile-hp: /images/tx.jpg       # 头像
mobile-bg: /images/userbg.png   # 背景

# disqus
disqus-shortname: blog-kejun-tk #disqus shortname
```
每一个新的文章均需要添加如下yaml:

```yaml
---
layout: post        # 指定模板
categories: NoImage # 分类，首页显示,该项经常用于检测是否为post。
image:              # 图像，用于首页，若留空将以NoImage的形式显示
tags: jekyll ubuntu # 标签，用于tags页面，允许多个
toc: *              # 确定是否显示toc目录，默认为不显示。
comments: true      # 是否显示评论
---
```

如需新增page，建议按：

* 根目录新建 `pageName.md`,并在头信息中键入如下：

```yaml
---
title: pageName         # 标题
layout: pageName        # 模板,建议为标题或文件名，若以文章形式输出，layout 填写 about 并编辑该.md文件即可，无需下一步 。
describe: pageName page # 描述
toc: *                  # 确定是否显示toc目录。
comments: true          # 是否显示评论
---
```

* 在`_layout`目录下新建`pageName.html`，并键入如下：

```yaml
--- 
layout: default 
---
```

这样你就成功引入了`head`，`header`，`main`，`script`，`footer`。然后编辑刚刚新建的`pageName.html`即可添加自定义`html`。

> 你新增的页面将以`_config.yml`文件中的 `default-color` 作为主题色。如果你知道你在干什么，你也可以编辑`header`和`footer`。

友情链接在`_data/links.yml`中，要删除或新增，请遵循如下格式：

```yaml
- name: Halyul
  image: images/links/halyul.png
  url: https://halyul.com/
  describe: Material Design爱好者
```

## 注意

该主题引用的`gallery.min.opt.js`及`gallery-materialize.min.opt.css`文件并没有经过原开发者同意。若侵权，请告知并删除。

你可以在`main.js`中自定义首页文章的GalleryExpand效果：

| Option  | Description |
| ------------- | ------------- |
|inDuration	| Transition duration for opening the gallery in ms. Default: 300|
|outDuration |	Transition duration for closing the gallery in ms. Default: 200|
|responsiveThreshold |	Breakpoint for full width style in pixels. Default: 992|
|contentPadding |	Padding for content in the gallery in pixels. Default: 40|
|onShow |	Callback function that is fired when the gallery is opened.|
|defaultColor |	Fallback color for when color thief fails. Default: '#444'|
|fillScreen |	Enable the full width image transition style. Default: false|

## TODO

* disqus     # 完成,努力实现home和archive评论
* toc        # 完成
* 图像加载动画 # 完成
* 二次元化选项 # 二次元最棒惹～

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).