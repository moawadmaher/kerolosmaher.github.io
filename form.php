<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";

$mail->SMTPDebug  = 0;  
  $mail->SMTPAuth   = TRUE;
  $mail->SMTPSecure = "TLS";
  $mail->Port       = 587;
$mail->Host       = "smtp.gmail.com";
$mail->Username   = "moustafa.taha1981@gmail.com";
$mail->Password   = "gogo4444";

$mail->IsHTML(true);
$mail->AddAddress("moustafaer@gmail.com", "recipient-name-fathy");
$mail->SetFrom("moustafaer@gmail.com", "from-name-fathy");
$mail->AddReplyTo("moustafaer@gmail.com", "reply-to-name-fathy");
$mail->AddCC("moustafaer@gmail.com", "cc-recipient-name-fathy");
$mail->Subject = "Test is Test Email sent via Gmail SMTP Server using PHP Mailer fohler";
$content = "<b>This is a Test Email sent via Gmail SMTP Server using PHP mailer class need replaced.</b>";



//
$email_message = "Form details below.\n\n";
function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

$first_name = $_POST['first-name']; // required
$last_name = $_POST['last-name']; // required
$birth_date = $_POST['birth-date']; // required
$phone_number= $_POST['phone-number']; // required
$email_from = $_POST['email-address']; // required
$city_name = $_POST['city-name']; // not required
$website = $_POST['website'];
$friend = $_POST['friend'];
$zeina_employee = $_POST['zeina-employee'];
$social_media = $_POST['social-media'];
$_files = $_POST['files'];
$req = $_POST['req'];
$email_message .= "First Name: ".clean_string($first_name);
$email_message .= "Last Name: ".clean_string($last_name);
$email_message .= "Email: ".clean_string($email_from);
$email_message .= "Telephone: ".clean_string($phone_number);
$email_message .= "Birth Date: ".clean_string($birth_date);
$email_message .= "Address: ".clean_string($city_name);
$email_message .= "Heard about zeina from: ".clean_string($website);
$email_message .= "Heard about zeina from: ".clean_string($friend);
$email_message .= "Heard about zeina from: ".clean_string($zeina_employee);
$email_message .= "Heard about zeina from: ".clean_string($social_media);
$email_message .= "attached files: ".clean_string($_files);
$email_message .= "Signed the Terms: ".clean_string($req);

//

//



//


$mail->MsgHTML($email_message); 
if(!$mail->Send()) {
  echo "Error while sending Email.";
  var_dump($mail);
} else {
  echo "Email sent successfully";
}
?>