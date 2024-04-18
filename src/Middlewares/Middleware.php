<?php

namespace Tualo\Office\CherryMarkdown\Middlewares;
use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\IMiddleware;

class Middleware implements IMiddleware{
    public static function register(){
        TualoApplication::use('cherry-markdown',function(){
            try{
                TualoApplication::javascript('cherry-markdown_loader', './cherry-markdownlib/dist/cherry-markdown.js',[],-10000);
                TualoApplication::stylesheet( './cherry-markdownlib/dist/cherry-markdown.min.css',10000);
                TualoApplication::stylesheet( './cherry-markdownlib/dist/cherry-markdown.extended.css',10001);
            }catch(\Exception $e){
                TualoApplication::set('maintanceMode','on');
                TualoApplication::addError($e->getMessage());
            }
        },-100); // should be one of the last
    }
}