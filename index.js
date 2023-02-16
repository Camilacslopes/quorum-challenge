const { parseCsv, writeOutputToCsv } = require('./csv-converter')
const { billsCount } = require('./count/bills-count')
const { supporterAndOpposersCount } = require('./count/supporter-and-opposers-count')


async function generateOutput() {
	const legislators 	= await parseCsv('data-input/legislators.csv')
	const bills 		= await parseCsv('data-input/bills.csv')
	const votes 		= await parseCsv('data-input/votes.csv')
	const voteResults 	= await parseCsv('data-input/vote_results.csv')
		
	const billsResult  = billsCount(legislators, voteResults)

	const legislatorVote = supporterAndOpposersCount(legislators, voteResults, votes)

	//Write deliverables to disk
	writeOutputToCsv("output/legislators-support-oppose-count.csv", billsResult)
	writeOutputToCsv("output/bills-supporters-opposers-count.csv", legislatorVote)

	console.log('Output result!')
}

generateOutput()