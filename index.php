<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'http://test-work/sendarray.php');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

$res = curl_exec($ch);

curl_close($ch);

$decode = json_decode($res);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>

    <div class="root" style="display: none">
        <?php echo $res ?>
    </div>

    <div class="parent">
        <form>
            <select id="selectFirst">
                <option value="sel" selected>Выберите значение</option>
            </select>
            <input type="hidden" name="Select1" value="" class="inp1">
            <select id="selectSecond">
                <option value="sel" selected>Выберите значение</option>
            </select>
            <input type="hidden" name="Select2" value="" class="inp2">
            <button type="submit">Отправить</button>
        </form>

    </div>

</body>

</html>