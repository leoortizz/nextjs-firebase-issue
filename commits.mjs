// @ts-check

const repos = ['firebase/firebase-tools', 'FirebaseExtended/firebase-framework-tools']

const authors = [
	'leoortizz',
	'cfofiu',
	'chalosalvador',
	'tjkohli',
	'austincrim',
	'draykefriesen',
	'9kubczas4',
	'phultquist',
	'JulienMartel'
]

const commitsPerAuthor = {}
const statsPerAuthor = {}

const commitsPerRepo = Object.fromEntries(repos.map((repo) => [repo, 0]))
const statsPerRepo = {}

let allCommits = 0
const allStats = {
	total: 0,
	additions: 0,
	deletions: 0
}

for await (const repo of repos) {
	for await (const author of authors) {
		const endpoint = `https://api.github.com/repos/${repo}/commits?author=${author}`

		const commitsRes = await fetch(endpoint, {
			headers: {
				Authorization: 'Bearer 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'
			}
		})
		const commits = await commitsRes.json()

		commitsPerAuthor[author] = (commitsPerAuthor[author] || 0) + commits.length

		commitsPerRepo[repo] += commits.length
		allCommits += commits.length

		for await (const { sha } of commits) {
			const commitEndpoint = `https://api.github.com/repos/${repo}/commits/${sha}`

			const commitRes = await fetch(commitEndpoint, {
				headers: {
					Authorization: 'Bearer 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'
				}
			})
			const commit = await commitRes.json()

			statsPerRepo[repo] = {
				total: (statsPerRepo[repo]?.total || 0) + commit.stats.total,
				additions: (statsPerRepo[repo]?.additions || 0) + commit.stats.additions,
				deletions: (statsPerRepo[repo]?.deletions || 0) + commit.stats.deletions
			}

			statsPerAuthor[author] = {
				total: (statsPerAuthor[author]?.total || 0) + commit.stats.total,
				additions: (statsPerAuthor[author]?.additions || 0) + commit.stats.additions,
				deletions: (statsPerAuthor[author]?.deletions || 0) + commit.stats.deletions
			}

			allStats.total += commit.stats.total
			allStats.additions += commit.stats.additions
			allStats.deletions += commit.stats.deletions
		}
	}
}

const commitsPerAuthorWithoutFolksThatDidntCommitAnything = Object.fromEntries(
	Object.entries(commitsPerAuthor).filter(([, commits]) => commits > 0)
)

const output = {
	allCommits,
	allStats: { ...allStats, changes: allStats.additions - allStats.deletions },
	commitsPerAuthor: commitsPerAuthorWithoutFolksThatDidntCommitAnything,
	statsPerAuthor,
	commitsPerRepo,
	statsPerRepo
}

console.log(output)

// writeFileSync('./commits.json', JSON.stringify(output, null, 2))
