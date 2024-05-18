//
//  mobile_appApp.swift
//  mobile-app
//
//  Created by Jayden Piao on 2024-05-18.
//
import FirebaseCore
import SwiftUI

@main
struct MobileApp: App {
    init() {
        FirebaseApp.configure()
    }
    var body: some Scene {
        WindowGroup {
            LandingPageView()
        }
    }
}
