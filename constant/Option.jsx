// Pre-load and export all image assets
const practiceImages = {
    quiz: require('../assets/images/quizz.png'),
    quizIcon: require('../assets/images/quiz.png'),
    flashcard: require('../assets/images/flashcard.png'),
    flashcardIcon: require('../assets/images/layers.png'),
    notes: require('../assets/images/notes.png'),
    qaIcon: require('../assets/images/qa.png'),
};

const bannerImages = {
    banner1: require('../assets/images/banner1.png'),
    banner2: require('../assets/images/banner2.png'),
    banner3: require('../assets/images/banner3.png'),
    banner4: require('../assets/images/banner4.png'),
    banner5: require('../assets/images/banner5.png'),
};

export const PracticeOption = [
    {
        name: 'Quiz',
        image: practiceImages.quiz,
        icon: practiceImages.quizIcon,
        path: '/quiz'
    },
    {
        name: 'Flashcards',
        image: practiceImages.flashcard,
        icon: practiceImages.flashcardIcon,
        path: '/flashcards'
    },
    {
        name: 'Question & Ans',
        image: practiceImages.notes,
        icon: practiceImages.qaIcon,
        path: '/questionAnswer'
    }
];

export const imageAssets = {
    ...bannerImages,
    ...practiceImages
};

export const CourseCategory = [
    "Tech & Coding",
    "Business & Finance",
    "Health & Fitness",
    "Science & Engineering",
    "Arts & Creativity"
];

export const ProfileMenu = [
    {
        name: 'Add Course',
        icon: 'add-outline',
        path: '/addCourse'
    },
    {
        name: 'My Course',
        icon: 'book',
        path: '/(tabs)/home'
    },
    {
        name: 'Course Progress',
        icon: 'analytics-outline',
        path: '/(tabs)/progress'
    },
    {
        name: 'My Subscription',
        icon: 'shield-checkmark',
        path: ''
    },
    {
        name: 'Logout',
        icon: 'log-out',
        path: '/login'
    }
];