<?php
namespace Tualo\Office\CherryMarkdown\Checks;

use Tualo\Office\Basic\Middleware\Session;
use Tualo\Office\Basic\IPostCheck;
use Tualo\Office\Basic\PostCheck;

use Tualo\Office\Basic\TualoApplication as App;


class ControllSQL implements IPostCheck{
    
    public static function testSessionDB(array $config){}

    public static function test(array $config){
        $clientdb = App::get('clientDB');
        if (!is_null($clientdb)){
            $sql = file_get_contents(dirname(__DIR__).'/sql/setup.sql');
            
            $sinlgeStatements = App::get('clientDB')->explode_by_delimiter($sql);
            PostCheck::formatPrintLn(['green'], "\t". 'Install SQL Controlls (CherryMarkdown)');
            foreach($sinlgeStatements as $commandIndex => $statement){
                try{
                    PostCheck::formatPrintLn(['green'],"\t"."\t".$commandIndex.' done');
                    $clientdb->direct($statement);
                    $clientdb->moreResults();
                }catch(\Exception $e){
                    echo PHP_EOL;
                    PostCheck::formatPrintLn(['red'], $e->getMessage().': commandIndex => '.$commandIndex);
                }
            }
        }
    }
}