import {contentIcon, elements as element, elements} from "../../support/enums/enumsGeneral";
import {
	eventTable, schedulerBgTable,
	schedulerIcon,
	schedulerUrl,
	schedulerView,
	schedulerViewListBasic, schedulerViewListScroll, viewModePage
} from "../../support/enums/enumsScheduler";


context('Part Two - E2E', () => {
	describe('Scheduler test', function () {

	it('Infinite scroll and month view', () => {
			const headerTableDayMode = '12am'
		   //todo use moment to get current month
			const headerTableMonthMode = 'Mon 5/1'
			const countHeaderDayMode = 24
			const minCountHeaderMonthMode = 28
			const maxCountHeaderMonthMode = 31
		    let indexMonth

			cy.visit(schedulerUrl)
			//Verify all mode view  exist
			schedulerViewListBasic.forEach((viewMode,index) => {
				cy.verifyExistText(elements.radioBtn,viewMode[0],'',index)
			})
			//Verify default header
			cy.verifyContainText(elements.headerPage,viewModePage.BASIC)

			let infiniteScrollLink = element.link.replace('{0}', viewModePage.INFINITE_SCROLL)
			//Switch to infinite scroll
			cy.clickElementByText(infiniteScrollLink.toLowerCase().replaceAll(' ', ''),viewModePage.INFINITE_SCROLL)
			//Verify day & mode exist after switch to infinite scroll mode
		    schedulerViewListScroll.forEach((viewMode,index) => {
				cy.verifyExistText(elements.radioBtn,viewMode[0],'',index)
				})

			schedulerViewListBasic.forEach((viewMode,index) => {
				if(viewMode === schedulerView.WEEK)
				cy.verifyNotExistText(elements.radioBtn,viewMode[0],'',index)
			})

			//todo check infinite scroll
			// cy.scrollIntoView()
		    //Verify day is checked by default
		    schedulerViewListBasic.forEach((viewMode) => {
			if(viewMode[0] === schedulerView.DAY)
				cy.verifyRadioButtonChecked(viewMode[1])
		    })

			//Verify  the column header in table after switch to hours
			cy.verifyExistText(schedulerBgTable.headers,headerTableDayMode)
			cy.verifyElementLength(schedulerBgTable.headers,countHeaderDayMode)
			//Switch to month view
			cy.clickElementByText(element.radioBtn,schedulerView.MONTH,1)
			schedulerViewListBasic.forEach((viewMode) => {
				if(viewMode[0] === schedulerView.MONTH)
					cy.verifyRadioButtonChecked(viewMode[1])
			})

			//Verify the headers table are changed after switch to MONTH view
			cy.verifyExistText(schedulerBgTable.headers,headerTableMonthMode)
			cy.verifyElementLengthGreaterThanEqualTo(schedulerBgTable.headers,minCountHeaderMonthMode)
			cy.verifyElementLengthLessThanEqualTo(schedulerBgTable.headers,maxCountHeaderMonthMode)
		})

	it('CreateNewEvents', () => {
			let numberEventBeforeAddEVent = 0
			let numberEventAfterAddEVent  = 0

			cy.visit(schedulerUrl)
			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numberEventBeforeAddEVent = numberEvent
			})
			//todo Verify no event
			cy.clickElement(eventTable.row,2)
			//todo to check the event not used
			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numberEventAfterAddEVent = numberEvent
				//Verify the DOM elements count increased
				expect(numberEventAfterAddEVent - 1).to.equal(numberEventBeforeAddEVent)
			})

		})

	it('AheadOneMonth', () => {
			let numberEventCurrentMonth = 0
			let numberEventAheadMonth= 0

			cy.visit(schedulerUrl)

			schedulerViewListBasic.forEach((viewMode) => {
				if(viewMode[0] === schedulerView.WEEK)
					cy.verifyRadioButtonChecked(viewMode[1])
			})

			schedulerViewListBasic.forEach((viewMode,index) => {
				if(viewMode === schedulerView.MONTH) {
					cy.clickElementByText(element.radioBtn,schedulerView.MONTH,index)
				}
			})


			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numberEventCurrentMonth = numberEvent
			})
			//go to Ahead one month
			cy.clickIconByContent(contentIcon.right,schedulerIcon.rightMonth)
			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numberEventAheadMonth = numberEvent
				//Verify the DOM elements count increased
			    expect( numberEventAheadMonth).to.be.lessThan(numberEventCurrentMonth)
			})
		});

	it('BackOriginalDate', () => {
			let numEventAfterAddEvent = 0
			let numEventAfterBack = 0

			cy.visit(schedulerUrl)
			cy.clickElement(eventTable.row,3)
			//todo to check the event not used
			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numEventAfterAddEvent = numberEvent
			})
			//go to Ahead one month
			cy.clickIconByContent(contentIcon.right,schedulerIcon.rightMonth)
			//Back to original month
			cy.clickIconByContent(contentIcon.left,schedulerIcon.leftMonth)
			cy.getNumberElement(eventTable.existingEvent).then((numberEvent)=>{
				numEventAfterBack = numberEvent
				//Verify  the events that you have created still exist.
				expect(numEventAfterAddEvent ).to.equal(numEventAfterBack)
			})

		})

	})
})

