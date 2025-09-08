
# 💧 WaterLogger dApp

A simple and beginner-friendly decentralized application (dApp) built on the **Algorand blockchain** that helps users **track their daily water intake** securely and transparently.

This project demonstrates how to use **Algorand smart contracts in TypeScript** to manage and persist data on-chain.
<img width="1918" height="1073" alt="image" src="https://github.com/user-attachments/assets/a612bd46-cb53-4832-a353-e6915824878c" />

---

## 📖 Project Description

Staying hydrated is essential for a healthy lifestyle, and WaterLogger makes it easy to log and track your water intake in a decentralized way. Instead of relying on centralized apps that may lose or misuse your data, WaterLogger ensures your records are stored on Algorand’s secure, scalable, and eco-friendly blockchain.

With just a few lines of code, this dApp shows how to:

* Define **global state variables**.
* Create **functions to update and reset state**.
* Return updated values to users.

---

## ⚡ What it does

* Records the amount of water (in milliliters) you drink.
* Stores the **total intake** on the blockchain in global state.
* Lets you **reset your water intake** at any time.
* Provides instant feedback by returning the updated total.

---

## ✨ Features

* 🔹 **Blockchain-backed** → Built on Algorand for trust, security, and immutability.
* 🔹 **Beginner-friendly code** → Easy-to-understand smart contract written in TypeScript.
* 🔹 **Simple functionality** → Only core functions: `logIntake` and `resetIntake`.
* 🔹 **Extensible** → Can be enhanced with user-specific tracking, goals, or rewards.

---

## 🔗 Deployed Smart Contract

https://lora.algokit.io/testnet/application/745557453

*(Replace `XXX` with your deployed smart contract link once available)*

---

## 🧑‍💻 Code

```ts
import { Contract, GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

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
```

---

## 🚀 Next Steps

* Add user accounts so each person can log their **own intake history**.
* Build a simple **frontend interface** for interaction.
* Introduce **hydration goals** and on-chain rewards.

---


