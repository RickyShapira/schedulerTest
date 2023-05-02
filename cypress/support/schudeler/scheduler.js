import {schedulerViewListBasic} from "../enums/enumsScheduler";


Cypress.Commands.add('getValueSchedulerViewList', (SchedulerView) => {
	schedulerViewListBasic.forEach((viewMode) => {
		if(viewMode[0] === SchedulerView)
			return viewMode[1]
	})
})

Cypress.Commands.add('getIndexSchedulerView', (schedulerViewList,SchedulerView) => {
	return schedulerViewList.forEach((viewMode,index) => {
		if(viewMode === SchedulerView) {
			return index
		}
	})
})


