<?php
namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\SlackMessage;

class SendErrorExceptionSlack extends Notification
{
   use Queueable;
   
   public $expection;

   public function __construct($expection)
   {
      $this->expection = $expection;
   }

   public function via($notifiable)
   {
      return ['slack'];
   }

   public function toSlack($notifiable)
   {
      $content = 
'Se ha detectado un nuevo error 
Descripción del error: '.$this->expection->getMessage().' 
Linea: '.$this->expection->getLine().'
Archivo: '.$this->expection->getFile();

      return (new SlackMessage)
            ->error()
            ->content($content);
   }
}