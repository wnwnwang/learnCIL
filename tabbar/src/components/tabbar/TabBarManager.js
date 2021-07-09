class TabBarManager {
	instance = null;
	currentLink = ''
	listeners = new Array()
	constructor() {
	}
	setCurrentLink(currentLink) {
		this.currentLink = currentLink

		this.listeners.forEach((item)=>{
        //执行代码
            item(currentLink)
        })
	}

	registerListener(fn) {
		this.listeners.push(fn)
	}
	unregisterListener(fn) {
		let index = this.listeners.indexOf(fn)
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
	}



	static getInstance() {
		if (!this.instance) {
			console.log("new instance")
			this.instance = new TabBarManager();
		}
		return this.instance;
	}
}

export default TabBarManager