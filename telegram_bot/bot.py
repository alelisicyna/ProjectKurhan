import telebot

admin_id = int(input("ADMIN ID: "))
bot_token = str(input("BOT TOKEN: "))

bot = telebot.TeleBot(bot_token)


@bot.message_handler(commands=['start'])
def start_message(message):
    bot.send_message(message.chat.id,"Вітаю! Калі ты знайшоў баг ці памылку на projectkurhan.us, то раскажы аб гэтым тут!\nДашлі калі ласка гэта па форме:\n1. Апісаньне вашых дзей да таго, як зьявілася памылка/баг.\n2. Апісаньне памылкі/бага\n3. Ваш браўзэр")


@bot.message_handler(content_types=['text'])
def forward_all_message(message):
    bot.forward_message(admin_id, message.chat.id, message.message_id)
    bot.send_message(message.chat.id, "Дзякуй за інфармацыю!")


if __name__ == '__main__':
    print("TELEGRAM BOT IS WORKING")
    bot.polling(none_stop=True)
