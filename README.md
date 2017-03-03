# jekyll-theme-materialize

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
mobile-hp: /images/tx.jpg
mobile-bg: /images/userbg.png
```
每一个新的文章均需要添加如下yaml:

```yaml
---
layout: post        # 指定模板
categories: NoImage # 分类，首页显示
image:              # 图像，用于首页，若留空将以NoImage的形式显示
tags: jekyll ubuntu # 标签，用于tags页面，允许多个
---
```

友情链接在`_data/links.yml`中，要删除或新增，请遵循如下格式：

```yaml
- name: Halyul
  image: images/links/halyul.png
  url: https://halyul.com/
  describe: Material Design爱好者
```

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).