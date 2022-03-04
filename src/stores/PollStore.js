import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
			question: 'Python or Java',
			answerA: 'Python',
			answerB: 'Java',
			votesA: 9,
			votesB: 15,
    }
]);

export default PollStore;