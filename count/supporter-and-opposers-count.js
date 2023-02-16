/**
 * Result based on the bills, voteResults, and votes data sets
 * @param {Array.<Object>} bills
 * @param {Array.<Object>} voteResults 
 * @param {Array.<Object>} votes
 * @returns An array of objects similar to the bills list but with
 *  supporter_count and opposer_count fields added
 */
function supporterAndOpposersCount(bills, voteResults, votes) {
	const votesMap = votes.reduce(function(acc, { id, bill_id }) {
		acc[id] = bill_id;
		return acc;
	}, {});

	return bills.map(bill => {
		let supporters = 0
		let opposers = 0

		voteResults.forEach(({ vote_id, vote_type }) => {
			if (votesMap[vote_id] == bill.id) {
				if (vote_type == 1) {
					supporters++;
				} else if (vote_type == 2) {
					opposers++;
				}
			}
		})

		return {
			...bill,
			supporter_count: supporters,
			opposer_count: opposers
		}
	})
}

exports.supporterAndOpposersCount = supporterAndOpposersCount