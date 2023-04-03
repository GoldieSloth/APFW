
{{ $embed := cembed 
    "title" (print "Hello there, "  .User.Username "!")
    "url" (.User.AvatarURL "512")
    "description" "This is an embed in a custom command. To see the code behind it, do `-cc embed`." 
    "color" 4645612 
    "author" 
	(sdict 
		"name" "YAGPDB.xyz!" 
		"url" "https://yagpdb.xyz/manage" 
		"icon_url" (.BotUser.AvatarURL "512")  )
    "thumbnail" (sdict "url" $avatar)
    "image" (sdict "url" $botAvatar)
    "footer" 
	(sdict 
		"text" "YAGPDB.xyz since" 
		"icon_url" $botAvatar) 
    "timestamp" .Member.JoinedAt
}}
{{/* this line is here to show raw cembed output */}} {{ $embed }}
{{ sendMessage nil $embed }}