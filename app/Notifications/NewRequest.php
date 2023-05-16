<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewRequest extends Notification
{
    use Queueable;

    public $user_creator;
    public $request;
    public $email;
    
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user_creator,$request = null,$email = null)
    {
        $this->user_creator = $user_creator;
        $this->request = $request;
        $this->email = $email;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
         return (new MailMessage)
            ->subject('Firmeaqui - Nueva solicitud de firma')
            ->line('¡Hola!')
            ->line($this->user_creator->name.' ha solicitado tu firma a un nuevo documento')
            ->line('Presiona "Ingresar" para procedas a firmar')
            ->action('Ingresar',url('').'/#/sign/'.$this->request->uuid.'/'.$this->email)
            ->line(' ')
            ->salutation('Gracias por usar nuestra web');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
