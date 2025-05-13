const PremiumCheck = () => {
    let isPremiumUser = true;
    return isPremiumUser ? <h2>Thank you for being a Premium Member!</h2> : <h2>Upgrade to Premium to enjoy exclusive features!</h2>
}

export default PremiumCheck