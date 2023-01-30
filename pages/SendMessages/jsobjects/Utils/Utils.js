export default {
	sendMesagge: () => {
		if (switchDiscord.isSwitchedOn) {
			DiscordAPI.run()
			const succesageMessage1 = "Discord Message send to: ".concat(List_marketing_list.selectedItem.MailingList).concat("server")
			showAlert(succesageMessage1, "success")
		}
		if (switchEmail.isSwitchedOn) {
			SendEmail.run()
			const succesageMessage2 = "Email Message send on: ".concat(List_marketing_list.selectedItem.MailingList).concat("List")
			showAlert(succesageMessage2, "success")
		}
		resetWidget("Message_Modal")
		closeModal("Message_Modal")
	},
	getEmails: () => {
		let nameArr = table2.selectedRows.map(el => {el.CustomerEmailID})
		return nameArr.toString();
	},
	dndList: () => {
		let dndCount = 0
		let reachable = 0
		getAllCustomersList.data.forEach(el => el.UsersDoNotDisturb == 0? dndCount +=1: reachable+=1)
		const ret = [{"x":"Reachable", "y": dndCount},
								 {"x": "Do not Disturb", "y":reachable}]
		return ret;
	}
}