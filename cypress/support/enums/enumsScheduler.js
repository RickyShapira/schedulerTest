export const schedulerElement = {
	//viewScheduler : `[class*=ant-radio-button]`,
	generalTable:'.scheduler',
}

export const eventTable = {
	table:'.scheduler-content-table',
	row: '.event-container',
	existingEvent:'.timeline-event',
}

export const schedulerIcon = {
	rightMonth: '.anticon-right',
	leftMonth: '.anticon-left'

}

export const schedulerBgTable ={
	//todo
	table : '.scheduler-bg-table',
	headers : '.scheduler-bg-table th',
	tbody : '.scheduler-bg-table tbody',
	tr : '.scheduler-bg-table tbody tr',
}

export const schedulerUrl = 'https://stephenchou1017.github.io/scheduler/#/'


export const schedulerView= {
	DAY:'Day',
	WEEK:'Week',
	MONTH:'Month',
	QUARTER:'Quarter',
	YEAR:'Year'
}

//0-schedulerViewList 1- value radio button
export const schedulerViewListBasic =  [[schedulerView.DAY,'000'],[schedulerView.WEEK,'100'],[schedulerView.MONTH,'200'],[schedulerView.QUARTER,'300'],[schedulerView.YEAR,'400']]
export const schedulerViewListScroll =  [[schedulerView.DAY,'000'],[schedulerView.MONTH,'200']]

export const viewModePage = {
	INFINITE_SCROLL:'Infinite scroll',
	BASIC:'Basic'
}



