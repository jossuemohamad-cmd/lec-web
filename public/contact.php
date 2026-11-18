<?php
// Headers for CORS and JSON response
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Read raw JSON or POST data
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'Geral';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Por favor, preencha todos os campos obrigatórios (nome, email e mensagem).'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'O endereço de email fornecido não é válido.'
    ]);
    exit;
}

$to = 'info@lecasu.co.mz';
$subject = "Novo Contacto pelo Website: " . ($service ? $service : 'Geral') . " - " . $name;
$date = date('d/m/Y H:i:s');

// HTML body
$body = '
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Novo Contacto do Website LECASU</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="background-color: #0f0f0f; padding: 24px; text-align: center; border-bottom: 4px solid #ff6600;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px;">LECASU &mdash; Novo Contacto Recebido</h2>
    </div>
    <div style="padding: 28px;">
      <p style="font-size: 15px; color: #374151; margin-top: 0;">Recebeu uma nova mensagem enviada a partir do formulário de contacto do website:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #111827; background-color: #f9fafb; width: 35%; border-bottom: 1px solid #e5e7eb;">Nome:</td>
          <td style="padding: 10px 12px; color: #374151; border-bottom: 1px solid #e5e7eb;">' . htmlspecialchars($name) . '</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #111827; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Email:</td>
          <td style="padding: 10px 12px; color: #374151; border-bottom: 1px solid #e5e7eb;"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #ff6600; text-decoration: none;">' . htmlspecialchars($email) . '</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #111827; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Telefone:</td>
          <td style="padding: 10px 12px; color: #374151; border-bottom: 1px solid #e5e7eb;">' . htmlspecialchars($phone ?: 'Não informado') . '</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #111827; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Serviço/Assunto:</td>
          <td style="padding: 10px 12px; color: #374151; border-bottom: 1px solid #e5e7eb;"><strong>' . htmlspecialchars($service) . '</strong></td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #111827; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Data / Hora:</td>
          <td style="padding: 10px 12px; color: #374151; border-bottom: 1px solid #e5e7eb;">' . $date . '</td>
        </tr>
      </table>
      
      <div style="background-color: #f9fafb; border-left: 4px solid #ff6600; padding: 16px; border-radius: 4px;">
        <h4 style="margin: 0 0 8px 0; color: #111827; font-size: 14px;">Mensagem:</h4>
        <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">' . htmlspecialchars($message) . '</p>
      </div>
    </div>
    <div style="background-color: #f3f4f6; padding: 14px; text-align: center; font-size: 12px; color: #6b7280;">
      Este email foi gerado automaticamente pelo website <a href="https://lecasu.co.mz" style="color: #ff6600;">lecasu.co.mz</a>
    </div>
  </div>
</body>
</html>
';

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: LECASU Website <website@lecasu.co.mz>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

echo json_encode([
    'success' => true,
    'message' => 'Mensagem enviada com sucesso! A nossa equipa entrará em contacto brevemente.'
]);
