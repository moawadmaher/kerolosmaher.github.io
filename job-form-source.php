<?php
if(isset($_POST['moustafaer@gmail.com'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "moustafaer@gmail.com";
    $email_subject = "from Zeina Tissue Website Form";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['first-name']) ||
        !isset($_POST['last-name']) ||
        !isset($_POST['birth-date']) ||
        !isset($_POST['phone-number']) ||
        !isset($_POST['email-address']) ||
        !isset($_POST['city-name']) ||
        !isset($_POST['website']) ||
        !isset($_POST['friend']) ||
        !isset($_POST['zeina-employee']) ||
        !isset($_POST['social-media']) ||
        !isset($_POST['files']) ||
        !isset($_POST['req'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
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
    $files = $_POST['files'];
    $req = $_POST['req'];

 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
//   if(strlen($comments) < 2) {
//     $error_message .= 'The Comments you entered do not appear to be valid.<br />';
//   }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($phone_number)."\n";
    $email_message .= "Birth Date: ".clean_string($birth_date)."\n";
    $email_message .= "Address: ".clean_string($city_name)."\n";
    $email_message .= "Heard about zeina from: ".clean_string($website)."\n";
    $email_message .= "Heard about zeina from: ".clean_string($friend)."\n";
    $email_message .= "Heard about zeina from: ".clean_string($zeina_employee)."\n";
    $email_message .= "Heard about zeina from: ".clean_string($social_media)."\n";
    $email_message .= "attached files: ".clean_string($files)."\n";
    $email_message .= "Signed the Terms: ".clean_string($req)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}
?>