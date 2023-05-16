<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendErrorException extends Notification
{
    use Queueable;

    public $expection;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($expection)
    {
        $this->expection = $expection;
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
            ->subject('Firmeaqui - Ha ocurrido un error :(')
            ->line('Se ha detectado un nuevo error')
            ->line('Descripción del error: '.$this->expection->getMessage())
            ->line('Linea: '.$this->expection->getLine())
            ->line('Archivo: '.$this->expection->getFile());
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
