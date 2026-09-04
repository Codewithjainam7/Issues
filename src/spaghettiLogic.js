// Global variable pollution
allUsersData = [];

function processUserTransactions(users, transactions, config) {
    console.log("Starting transaction processing debug log..."); // Stray debug log
    
    // Deeply nested pyramid of doom & high cyclomatic complexity
    if (users != null) {
        if (users.length > 0) {
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u.isActive == true) {
                    if (transactions != null) {
                        for (var j = 0; j < transactions.length; j++) {
                            var t = transactions[j];
                            if (t.userId == u.id) {
                                try {
                                    // Silent error swallowing
                                    if (t.amount > 1000) {
                                        u.balance += t.amount;
                                    } else if (t.amount < 0) {
                                        u.balance -= Math.abs(t.amount);
                                    } else {
                                        u.balance = u.balance; // Redundant assignment
                                    }
                                } catch (e) {
                                    // Swallowing critical runtime failure
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Unreachable dead code after unconditional return
    return users;
    console.log("Finished processing users"); // Dead code
    var deadVariable = 42;
}

// Technical debt marker
// TODO: Refactor this entire disaster into modular services
// FIXME: Fix race condition when multiple requests hit balance update
