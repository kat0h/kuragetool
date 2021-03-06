#!/bin/bash

npm run build && cd dist && git init && git add . && git commit -m 'u' && git remote add origin https://github.com/kuragetool/kuragetool.github.io.git && git push -u origin master --force
