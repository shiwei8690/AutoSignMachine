class BusinessError extends Error { }
class TryNextError extends Error { }

module.exports = {
    BusinessError,
    TryNextError
}