<?php

//echo $_REQUEST['a'] + $_REQUEST['b'];

//function getArray()
//{
$text = fopen("bd.txt", "r");
$array = null;
$newArray = [];

if ($text) {
    while (($buffer = fgets($text)) !== false) {
        $array[] = $buffer;
    }
}
fclose($text);

foreach ($array as $index => $value) {
    $str = $array[$index];
    $arr = explode(',', $str);
    array_push($newArray, $arr);
}

//var_dump($newArray);
$jsonnewArray =  json_encode($newArray);
$jsonnewArray = preg_replace('!\\r?\\n!', "", $jsonnewArray);
echo $jsonnewArray;
//}

//var_dump($_REQUEST);
