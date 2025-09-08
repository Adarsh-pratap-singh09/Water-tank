import { Contract,GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

export class WaterLogger extends Contract {
  // Store total water intake (in ml) as global state
  totalIntake = GlobalState<uint64>({ key: "totalIntake", initialValue: 0 })

  // Function to log water intake
  logIntake(amount: uint64): uint64 {
    // Increase total intake
    this.totalIntake.value = this.totalIntake.value + amount

    // Return updated total
    return this.totalIntake.value
  }

  // Function to reset intake (optional)
  resetIntake(): void {
    this.totalIntake.value = 0
  }
}
