/**
 * Result based on the legislators and voteResults data sets
 * @param {Array.<Object>} legislators 
 * @param {Array.<Object>} voteResults 
 * @returns An array of objects similar to the legislators list but with
 *  num_supported_bills and num_opposed_bills fields added
 */
function billsCount(legislators, voteResults) {
  return legislators.map(legislator => {
		let favorableCount = 0
		let againstCount = 0

		voteResults.forEach(({ legislator_id, vote_type }) => {
			if (legislator_id == legislator.id) {
				if (vote_type == 1) {
					favorableCount++;
				} else if (vote_type == 2) {
					againstCount++;
				}
			}
		})

		return {
			...legislator,
			num_supported_bills: favorableCount,
			num_opposed_bills: againstCount
		}
	})
}

exports.billsCount = billsCount
