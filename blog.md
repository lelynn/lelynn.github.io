---
layout: post
title: Blogposts!
permalink: /blog/
---

{% for post in site.posts %}
  <div class="post-summary">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
    <p><small>Posted on {{ post.date | date: "%b %d, %Y" }}</small></p>
  </div>
{% endfor %}
