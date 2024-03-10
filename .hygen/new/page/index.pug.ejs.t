---
to: <%= absPath %>/index.pug
---

extends /layouts/main/index.pug

block title
  title <%= name %>

block beforeWorkarea
  +header()

block workarea

block afterWorkarea
  +footer()