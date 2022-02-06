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
    <div class="parent">
        <form action="">
            <select id="selectFirst">
                <option value="sel" selected>Выберите значение</option>
            </select>
            <input type="hidden" name="Select1" value="" class="inp1">
            <select id="selectSecond">
                <option value="sel" selected>Выберите значение</option>
            </select>
            <input type="hidden" name="Select2" value="" class="inp2">
            <input type="submit" class="btn"></input>
        </form>
    </div>
    <div class="result"></div>
</body>

</html>