interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken?: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
};


const hitest: Admin = {
    dbId: 22, email: "rashi", userId: 23, startTrail: () => {
        return "";
    },
    getCoupon: (couponname: string, off: number) => {
        return 1;
    },
    role: "admin"
}