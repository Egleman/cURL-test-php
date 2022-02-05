<?php

//Создаю двумерный массив из текстового файла
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

//перевожу в json формат
$jsonnewArray =  json_encode($newArray);
$jsonnewArray = preg_replace('!\\r?\\n!', "", $jsonnewArray);

echo $jsonnewArray;
