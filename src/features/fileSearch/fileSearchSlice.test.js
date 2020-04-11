/* eslint-env jest */
import fileSearch, { selectFile, updateEffectiveDate, fetchResults } from './fileSearchSlice'

describe('fileSearch reducer', () => {
    it('should handle initial state', () => {
        expect(fileSearch(undefined, {}).effectiveDate).toEqual((new Date()).toDateString())
    }),
    
    it('should handle selectFile', () => {
        expect(
            fileSearch(undefined, {
                type: selectFile.type,
                payload: "scd.securities"
            }).selectedFile
        ).toEqual("scd.securities")
    }),
    
    it('should handle updateEffectiveDate', () => {
        expect(
            fileSearch(undefined, {
                type: updateEffectiveDate.type,
                payload: new Date(2020, 2, 31).toDateString()
            }).effectiveDate
        ).toEqual(new Date(2020, 2, 31).toDateString())
    }),
    
    it('should handle fetchResults', () => {
        expect(
            fileSearch(undefined, {
                type: fetchResults.type
            }).fileChecked
        ).toEqual(false)
    })
})