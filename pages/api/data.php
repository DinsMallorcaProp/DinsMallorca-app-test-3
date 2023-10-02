// api/data.php
<?php

$data = [
  'message' => 'Hello from PHP backend!'
];

header('Content-Type: application/json');
echo json_encode($data);
