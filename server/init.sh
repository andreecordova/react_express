#!/bin/bash

echo "------------------ Starting npm process ------------------"
npm install -g nodemon
npm install
echo "------------------ Starting db process ------------------"
npm run db:migrate
echo "------------------ Starting server ------------------"
npm run dev