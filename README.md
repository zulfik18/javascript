
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="app.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Junior Level</title>

    <style>
        th {
            border: 1px solid black;
            text-align: center;
        }
        td {
            border: 1px solid black;
            text-align: center;
        }
    </style>
</head>
<body>
  <!-- Here a loader is created which loads till response comes -->
             <div class="d-flex justify-content-center">
              <div class="spinner-border" 
                   role="status" id="loading">
                  <span class="sr-only">Loading...</span>
              </div>
          </div>
      <h1>Countries List</h1>
      <div>
        <!-- search box to filter table -->
        <input type="text" id="myInput" onkeyup="searchFunction()" placeholder="Search for names..">
      </div>
      <table id="Countries">
      </table>
</body>
</html>

