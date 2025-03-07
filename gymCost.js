function calculateGymCost(friends, currentCost){
    let finalCost;
    if (friends === 0){
        finalCost = currentCost;
    }else if (friends === 1){
        finalCost = 0.95 * currentCost;
    }else if (friends === 2){
        finalCost = 0.90 * currentCost;
    }else if (friends >= 3){
        finalCost = 0.85 * currentCost;
    }


    return finalCost
}


export {calculateGymCost}