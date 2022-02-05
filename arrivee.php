<?php
$select1 = "не определено";
$select2 = "не определен";
if (isset($_POST["Select1"])) {

    $select1 = $_POST["Select1"];
}
if (isset($_POST["Select2"])) {

    $select2 = $_POST["Select2"];
}
echo "Select1: $select1 <br> Select2: $select2";
echo json_decode($_REQUEST['data']);
