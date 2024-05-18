//
//  LandingPageView.swift
//  mobile-app
//
//  Created by Jayden Piao on 2024-05-18.
//
import SwiftUI

struct LandingPageView: View {
    @State private var navigateToLogin = false
    
    var body: some View {
        VStack {
            Spacer()
            Image(systemName: "person.circle") // change image later
                .resizable()
                .scaledToFit()
                .frame(maxWidth: .infinity, maxHeight: 300)
            Text("Elevate your 3d printing capabilities.")
                .font(.title)
                .multilineTextAlignment(.center)
                .padding()
            Spacer()
            
            Button(action: {
                navigateToLogin = true
            }) {
                Text("Next")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(maxWidth: .infinity)
                    .background(Color.blue)
                    .cornerRadius(10)
                    .padding()
            }
            .fullScreenCover(isPresented: $navigateToLogin) {
                LoginView()
            }
        }
        .padding()
    }
}

#Preview {
    LandingPageView()
}
